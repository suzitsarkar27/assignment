    const express=require("express");

    const router=express.Router();

    router.get('/',(req,res)=>{
        res.send('data send1 id get')
    })

    router.post('/',(req,res)=>{
        res.send('data post success full')
    })
    module.exports=router;