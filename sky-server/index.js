const skyServer = require('./app/server');

const APP_PORT = process.env.PORT || 3001;

let skyServerApp = skyServer();

const server = skyServerApp.listen(APP_PORT, function () {
    console.log(`sky-server start to listen on http://localhost:${server.address().port} ...`);
});
