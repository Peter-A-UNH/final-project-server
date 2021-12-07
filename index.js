const http = require('http');
const fs =require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    console.log(req.url);
    if(req.url ==='/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'),(err, content)=>{
            if (err) throw err;

            res.writeHead(200, {'Content-Type': "text/html"});
            res.end(content);
        });
    }
    if(req.url ==='/einstein'){
        fs.readFile(path.join(__dirname, 'public/Einstein', 'index.html'),(err, content)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': "text/html"});
            res.end(content)
        });
    }
    else if(req.url==='/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'),(err, content)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': "text/html"});
            res.end(content)
        });
    }
    else if(req.url==='/api'){
        //display api information
        fs.readFile(path.join(__dirname, 'public', 'pizzas.json'),(err, content)=>{
            if (err) throw err;

            res.setHeader("Access-Control-Allow-Origin", "*");
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(content)
        });
    }
    else{
        //display 404 error page
        fs.readFile(path.join(__dirname, 'public', '404.html'),(err, content)=>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content)
        });
    }
});

const PORT =process.env.PORT || 2323
server.listen(PORT, () => console.log(`Server running on port: ${PORT} `));
    