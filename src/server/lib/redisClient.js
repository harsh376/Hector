/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import redis from 'redis';

export default function createRedisClient() {
  const redisClient = redis.createClient(6379, 'store');

  redisClient.on('error', err => {
    console.error(`Redis error: ${err}`);
  });

  redisClient.on('connect', () => {
    console.log('Connected to Redis');
  });

  return redisClient;
}
