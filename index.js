const http = require('http');
const customer = require('./mockdata').customers.customers;

var server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.write('<html><body> THIS IS HOME </body></html>');
        res.end();
    }
    if(req.url.substring(0,4) =='/api'){
        name = req.url.substring(5,);
        console.log(`Recieved ${name}`);
        var foundFlag = 0;
        for(var i=0;i<customer.length;i++){
            if(customer[i].name==name){
            res.write(`${JSON.stringify(customer[i])}`);
            foundFlag = 1;
            }
        }
        if(foundFlag==0){
            res.write(` ${name} not found`);
        }
        // res.write(JSON.stringify(customer));
        res.end();
    }
});

server.listen('3000');
console.log('Server Listening on 3000');