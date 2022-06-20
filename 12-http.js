const http = require('http'); //Szerver modul

const server = http.createServer((req, res)=>{ //req = beérkező kérés, res az amit visszaküldünk
    if(req.url === '/'){
        res.end('Welcome to our home page') //end hatására le is zárul a szerver
    };
    if(req.url === '/about'){
        res.end('our short mistery')
    }
    res.end('<h1>Oops! not found</h1>') //Ide is lehet h1-et berakni x.x, ha egyik link sem jó ezt küldi vissza
})

server.listen(5000)  //localhost:5000, elő fog jönni a welcome to our home page oldal.