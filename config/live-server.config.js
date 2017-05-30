var liveServer = require("live-server");

var params = {
    port: 3000, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "./dist", // Set root directory that's being served. Defaults to cwd.
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    logLevel: 0, // 0 = errors only, 1 = some, 2 = lots
    middleware: [require('connect-history-api-fallback')({index: '/index.html', verbose: true})] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};

liveServer.start(params);

console.info("Server started on port " + params.port);
