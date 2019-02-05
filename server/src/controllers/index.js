const helloWorldRoute = require('./hello-world-controller');

module.exports = function(app) {
    helloWorldRoute(app);
};