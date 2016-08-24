const config = {
  Ajax: {
    // env variable `AJAX_HOST` provided when running docker
    // containers
    host: process.env.AJAX_HOST ? process.env.AJAX_HOST : 'http://localhost:5000',
  },
};

export default config;
