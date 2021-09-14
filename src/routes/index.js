const express=require('express');
const router = express.Router();
const testUser=require('../models/testUser');

//view information
router.get('/user',async (req,res)=>{
    try{
    const test=await testUser.find();
    res.json(test);
    }catch(err){
      res.json({message:err});  
    }
})
//insert information
router.post('/user',async (req,res)=>{
   
    const test =new testUser(req.body);
   await test.save();  
    res.send(test);
})
// view information for id 
router.get('/user/:id',async(req,res)=>{
try{
  const getId= await testUser.findById(req.params.id);
 res.json(getId);   
 
}catch(err){
res.json({message:err});
} 
})

//delete information 
router.delete('/user/:id',async (req,res)=>{
try{
   const deleteId=await testUser.remove({_id:req.params.id}); 
   res.json(deleteId);
}catch(err){
res.json({message:err});
}    
});
//update information 

router.patch('/user/:id',async (req,res)=>{
  try{
    const updateId=await testUser.findOneAndUpdate(
      {_id:req.params.id},
      req.body,
      {new:true}
      );
  res.json(updateId);
    }catch(err){
       res.json({message:err}); 
    }
});
module.exports=router;

