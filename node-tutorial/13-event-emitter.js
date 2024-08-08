const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log(`data received`)
})


customEmitter.on('response', (name, id)=>{
    console.log(`data received for user: ${name} and id: ${id}`)
})
customEmitter.on('response', ()=>{
    console.log(`data received 3`)
})

customEmitter.emit('response', 'john', 34)