const express = require('express')
const student = require('./model')
const router = express.Router()
router.use(express.json())


router.post('/students', async (req, res) => {

   const newUser = new student(req.body)
   try {
      const result = await newUser.save()
      res.send(result)
   }
   catch (error) {
      res.send(error.message)
   }
})

router.get('/students/:id', async (req, res) => {
   
   try {
      const retstudent = await student.findById(req.params.id)
      console.log(retstudent)
      if(!retstudent){
         
         res.send(retstudent)
      }
      else{
         res.send(retstudent)
      }
   }
   catch (error) {
      res.send(error.message)
   }
})

// router.get('/students', async (req, res) => {

//    try {
//       const retrivestudent = await Student.find()
//       res.send(retrivestudent)
//    }
//    catch (error) {
//       res.send(error.message)
//    }
// })

router.put('/students/:id', async (req, res) => {

   try {
      const updatestudent = await student.findByIdAndUpdate(req.params.id,req.body, { new: true } )
      if(!updatestudent){
         console.log(updatestudent) 
         res.send('student not found')
      }
      else{
         console.log(updatestudent)
         res.send(updatestudent)
      }
   }
   catch (error) {
      res.send(error.message)
   }
})

router.delete('/students/:id', async (req, res) => {

   try {
      const deletestudent = await student.findByIdAndDelete(req.params.id)
      if(!deletestudent){
         res.send('student not found')
      }
      res.send(deletestudent)
   }
   catch (error) {
      res.send(error.message)
   }
})

module.exports = router