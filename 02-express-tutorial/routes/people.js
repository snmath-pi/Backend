const express = require('express')
const router = express.Router()
let {people}=require('../data')

router.get('/', (req,res)=>{
    res.status(200).json({success:true,data:people})
})
// parse json

router.post('/api/postman/people', (req,res)=> {
    const {name}=req.body;
    if(name) {
        return res.status(201).json({success:true,data:[...people, name]})

    } else {
        return res.status(400).json({success:false,msg:'please provide a name value'})
    }
})
router.post('', (req,res)=> {
    const {name}=req.body
    if(name) {
        return res.status(201).json({success:true,person:name})

    } else {
        return res.status(400).json({success:false,msg:'please provide a name value'})
    }
})


router.put('/:id', (req, res)=> {
    const {id}=req.params
    const {name}=req.body
    
    const person = people.find((person)=> person.id===Number(id))
    if(person) {
        const newPeople = people.map((person)=>{
            if(person.id===Number(id)){
                person.name=name
            }
            return person
        })
        res.status(200).json({success:true,data:newPeople})

    } else {
        return res.status(400).json({success:false,msg:`no person with id${id}`})
    }
})

router.delete('/:id', (req, res)=> {
    
    const person = people.find((person)=> person.id===Number(req.params.id))
    if(person) {
        const newPeople = people.filter((person)=>
            person.id!==Number(req.params.id))
        res.status(200).json({success:true,data:newPeople})

    } else {
        return res.status(400).json({success:false,msg:`no person with id${id}`})
    }
})


module.exports=router