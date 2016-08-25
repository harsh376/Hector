const config = {
  Ajax: {
    // host: process.env.AJAX_HOST ? process.env.AJAX_HOST : 'http://localhost:5000',

    host: process.env.DOCKER_ENABLED ? 'tcp://ajax:5000' : 'http://localhost:5000',
  },
};

export default config;
