const express=require('express');
const cors=require("cors");
const router = require('./Backend_server1/route/data.route');
require('dotenv').config()
const app=express();
const port=process.env.PORT || 5000;


app.use(cors());
app.use(express.json())

app.use("/data",router)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })