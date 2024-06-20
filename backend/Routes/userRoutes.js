const express = require('express')
const mongoose=require('mongoose')
const user=require('../models/userModel')
const router=express.Router()

//get all
router.get('/', async(req, res) => {
  try {
    const showall= await user.find()
    res.send(showall)
  } catch(error){
    console.log("could not get")
    res.status(400).json({error:error.message})
  }
  
})
//get by id 
router.get('/:id', async(req, res) => {
    const id=req.params
    try {
      const singleUser= await user.findById({__id,id})
      res.send(singleUser)
    } catch(error){
        console.log("could not add")
        res.status(400).json({error:error.message})
      }
    
  })

  //post
router.post('/',async(req,res)=>{
  const {Name,Age,email}=req.body
  try{
    const userData=await user.create({
      Name:Name,
      Age:Age,
      email:email
    })
    res.json(userData)

  }catch(error){
    console.log("could not add")
    res.status(400).json({error:error.message})
  }

})

//delete
router.delete('/:id', async(req, res) => {
    const {id}=req.params
    try {
      const singleUser= await user.findByIdAndDelete(id)
      res.send(singleUser)
    } catch(error){
        console.log("could not add")
        res.status(400).json({error:error.message})
      } 
  })

  //update/patch
  router.patch('/:id', async(req, res) => {
    const {id}=req.params
    const {Name,Age,email}=req.body
    try {
      const updateUser= await user.findByIdAndUpdate(id,req.body,{new:true,

      })
      res.send(updateUser)
    } catch(error){
        console.log("could not update")
        res.status(400).json({error:error.message})
      }
    
  })

module.exports=router