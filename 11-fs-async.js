const {readFileSync, writeFileSync, read, readFile, writeFile} = require('fs')
console.log('start');
//Egyszerre több felhasználó is kérheti, írhatja, whatever csinálhatja a fájlt., ez az async
readFile('./content/first.txt','utf-8',(err, result) =>{
    if(err){
        console.log(err);
        return err;
    }
    const first = result;
})
readFile('./content/second.txt','utf-8',(err, result) =>{
    if(err){
        console.log(err);
        return err;
    }
    const second = result;
    console.log("done");
    writeFileSync(`./content/result-sync.txt`,`Here is the result of file writing ${second} `)
})
console.log('log starting next task');