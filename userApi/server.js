const http = require('http');
const fs = require('fs');
const { json } = require('stream/consumers');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        fs.readFile("userdata.json","utf-8" , (err,data)=>{
            console.log(data)
            const obj= JSON.parse(data);
            res.end(obj[0].name)

        })
        // res.end("hellow from the user api")
    }
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});