const http = require('http');
const customer = require('./mockdata').customers.customers;

var server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.write('<html><body> THIS IS HOME </body></html>');
        res.end();
    }
    if(req.url.substring(0,4) =='/api'){
        res.write(JSON.stringify(customer));
        res.end();
    }
});

server.listen('3000');
console.log('Server Listening on 3000');