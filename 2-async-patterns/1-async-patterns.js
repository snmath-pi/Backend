const {readFile, writeFile, write} = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
const getText = (path)=> {
    return new Promise((resolve,reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err) {
                reject(err);
                return;
            } 
            resolve(data)
        })
    })
}




const start = async()=>{
    try {
        const first = await readFilePromise('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first)
        console.log(second)
    } catch(err) {
        console.log(err)
    }
}
start()
// getText('./content/first.txt').then(result=>console.log(result)).catch((err)=>console.log(err))