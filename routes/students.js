const express = require('express')
const router = express.Router()
const Student = require('../models/student')


router.get('/', async(req,res) => {
    try{
           const students = await Student.find()
           res.json(students)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const student = await Student.findById(req.params.id)
           res.json(student)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        subject: req.body.subject
    })
    try{
            const a1 = await student.save()
            res.json(a1)
        }catch(err){
            res.send('Error')
        }
    })

    router.patch('/:id', async(req,res)=>{
        try{
                const student = await Student.findById(req.params.id)
                student.subject = req.body.subject
                const a1 = await student.save()
                res.json(a1)
        }catch(err){
            res.send('Error')
        }
    })

    router.delete('/:id', async(req, res)=>{
        try{
                const student = await Student.findById(req.params.id)
                student.subject = req.body.subject
                const a1 = await student.remove()
                res.json(a1)
        }catch(err){
            res.send('Error')
        }
    })


module.exports = router
