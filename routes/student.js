const express=require("express");
const studentcontroller=require('../contollers/studentcontroller')
const router=express.Router();
router.use(express.json())//iska bina data nahi aayega 
router.post('/add/student',(req,res)=>{
studentcontroller.addStudent(req,res)
})
router.get('/students',(req,res)=>{
    studentcontroller.getStudent(req,res)
})
module.exports=router