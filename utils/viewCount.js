let count=0;

const viewCounet=(req,res,next)=>{
    count++;
    console.log(count);
    res.send('data inserted')
}

module.exports=viewCounet;