const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')
// parse form data
app.use(express.json())

app.use(express.urlencoded({extended:false}))
// static assests
app.use(express.static('./methods-public'))
app.use('/login', auth)
app.use('/api/people',people)


app.listen(5000, ()=> {
    console.log('Server starting at port 5000....');
    
})