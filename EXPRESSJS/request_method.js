const express = require('express');
 const cookieParser = require('cookie-parser');
const app  = express();
const port = 3002;

// Middleware to parse JSON bodies and cookies
app.use(express.json());
app.use(cookieParser());

// Middleware to log the time of the request
app.use((req, res, next) => {
req.requestTime = new Date();
next();
});

// Route to demonstrate various req properties
app.get('/demo/:param', (req, res) => {
console.log('req.requestTime: Time of request: The time at which the request was received\n', req.requestTime, '\n\n');
console.log('req.app: The Express app instance\n', req.app, '\n\n');
console.log('req.baseUrl: The URL path on which a router instance was mounted\n', req.baseUrl, '\n\n');
console.log('req.body: Contains key-value pairs of data submitted in the request body\n', req.body, '\n\n');
console.log('req.cookies: Contains cookies sent by the request\n', req.cookies, '\n\n');
console.log('req.fresh: Indicates whether the request is fresh\n', req.fresh, '\n\n');
console.log('req.hostname: The hostname derived from the Host HTTP header\n', req.hostname, "\n\n");
console.log('req.ip: The remote IP address of the request\n', req.ip, '\n\n');
console.log('req.ips: The IP addresses in the X-Forwarded-For header (if trust proxy is enabled)\n', req.ips, '\n\n');
console.log('req.originalUrl: The original request URL\n', req.originalUrl, '\n\n');
console.log('req.params: An object containing route parameters\n', req.params, '\n\n');
console.log('req.path: The path part of the request URL\n', req.path, '\n\n');
console.log('req.protocol: The request protocol (http or https)\n', req.protocol, '\n\n');
console.log('req.query: An object containing query string parameters\n', req.query, '\n\n');
console.log('req.route: The currently matched route\n', req.route, '\n\n');
console.log('req.secure: A boolean that is true if a TLS connection is established\n', req.secure, '\n\n');
console.log('req.signedCookies: Contains signed cookies sent by the request\n', req.signedCookies, '\n\n');
console.log('req.stale: Indicates whether the request is stale\n', req.stale, '\n\n');
console.log('req.subdomains: An array of subdomains in the domain name of the request\n', req.subdomains, '\n\n');
console.log('req.xhr: A boolean that is true if the request was issued with XMLHttpRequest\n', req.xhr,'\n\n');
console.log ('req.headers: An object containing the request headersin', req.headers, '\n\n');

res.json({
    requestTime: req.requestTime,
app: req.app,
baseUrl: req.baseUrl,
body: req.body,
cookies: req.cookies,
fresh: req.fresh,
hostname: req.hostname,
ip: req.ip,
ips: req.ips,
originalUrl: req.originalUrl,
params: req.params,
path: req.path,
protocol: req.protocol,
query:
req.query,
route:
req.route,
secure: req.secure,
signedCookies: req.signedCookies,
stale: req.stale,
subdomains: req.subdomains,
xhr: req.xhr,
headers: req.headers
});
});
// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});

