const express = require('express')
const cors = require('cors');

require('dotenv').config()
const app = express()
const usersRoute = require('./Routes/v1/users.route');
const errorHandler = require('./middleware/errorHandler');


const port = process.env.PORT || 5000

//midleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");


// app.use(limiter)
// app.use(viewCount)

app.use('/api/v1/users', usersRoute)


app.get('/', (req, res) => {
  res.send('node server running')
  // res.sendFile(__dirname + '/public/index.html')
  res.render("home.ejs",{
    id: 5,
    user: {
      name: "test"
    }
  });
})

app.all("*", (req, res) =>{
  res.send("No Route found")
})

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server side running on port ${port}`)
})

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});