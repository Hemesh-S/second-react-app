const { createProxyMiddleware } = require('http-proxy-middleware');
import { io } from "socket.io-client";

//const socket = io('http://localhost:8000', {
   // path: "/api/socket.io/"
//});

module.exports = function(app) {
  app.use(
    '/socket.io/',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      //changeOrigin: true,
      ws: true
    })
  );
};