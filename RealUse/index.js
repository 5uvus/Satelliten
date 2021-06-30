const express = require('express');
const morgan = require("morgan");
const fetch  =require("node-fetch");
const { createProxyMiddleware } = require('http-proxy-middleware');
const { response } = require('express');

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";
const satellite_id = 1;
const API_SERVICE_URL = `https://api.spectator.earth/satellite/${satellite_id}`;

// Logging
app.use(morgan('dev'));
app.get('/json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});
// Info GET endpoint
app.get("/info",(req, res, next) => {
    fetch(API_SERVICE_URL)
    .then(response=> response.json())
    .then(json=>{
        res.json(json)
        console.log(json);
        export {json};
    })
 });

 // Authorization
app.use("", (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.sendStatus(403);
    }
 });

 // Proxy endpoints
app.use( `^/api`, createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/api`]: '',
    },
 }));

 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });