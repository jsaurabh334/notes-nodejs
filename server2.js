const http = require("http");


const hostname = '127.0.0.1'
const port = 80;

const server = http.createServer((req,res)=>{
    res.statusCode= 200;
    res.end("hellow this is my first server")
});
server.listen(port,hostname,()=>{
    console.log(`server is runnning at http://${hostname}:${port}/`)
});
