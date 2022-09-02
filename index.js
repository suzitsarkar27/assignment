const express=require('express');
const cors=require("cors");
const router = require('./route/data.route');

require('dotenv').config()
const app=express();
const port=process.env.PORT || 5000;


app.use(cors());
app.use(express.json())

app.use("/data",router)
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })