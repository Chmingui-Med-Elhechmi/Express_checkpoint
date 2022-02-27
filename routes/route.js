const express=require('express')
const router=express.Router()

router.get('/services',(req,res)=>{
    res.render('Our_Services');
});

router.get('/contact',(req,res)=>{
    res.render('Contact_us');
});


module.exports=router;