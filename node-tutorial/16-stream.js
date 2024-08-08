const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')


stream.on('data',(res)=>{
    console.log(res)
})

stream.on('error',(err)=>{
    console.log(err)
})