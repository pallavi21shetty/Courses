let http = require('http')
const server=http.createServer();
server.on('request',(req,response)=>{
    response.end("Hello world!!! say hiii")
});
server.listen(3000);
