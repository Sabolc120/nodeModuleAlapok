const {readFileSync, writeFileSync, read} = require('fs')

// olvasás txt-fájlból
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
//hÁTRÁNY a sima szinkronban: Egyszerre csak egy felhasználó lesz képes olvasni ezt a fájlt, különben crash.
console.log(first, second);
//Fájlbaírás
writeFileSync(`./content/result-sync.txt`,`Here is the result of file writing :${first}, ${second} `)
