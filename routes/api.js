const express=require('express');
const router=express.Router();

//Importing the item model
const Item=require('../models/Item');

//'Get' request to show all items
router.get('/',(req,res)=>{
    Item.find()
        .sort({date:-1})
        .then((items)=>res.json(items));  //responding back with the items
});

//'Post' request to update the list
router.post('/',(req,res)=>{
    const newItem=new Item({
        name:req.body.name     //extracting name from the body of the request
    });
    newItem.save().then((item)=>res.json(item));
})

//Delete an item
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)    //extracting id from the request url
        .then((item)=>item.remove().then(()=>res.json({success:true}))) 
        .catch(()=>res.status(404).json({sucess:false}));   
})


module.exports=router;