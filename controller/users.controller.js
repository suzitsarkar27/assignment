let users = [
    {
      "id": 1,
      "gender": "male",
      "name": "rabby",
      "contact": "017838",
      "address": "mirpur_12",
      "img": "https://i.ibb.co/27wYrHm/Screenshot-84.png"
    },
    {
      "id": 2,
      "gender": "male",
      "name": "jony",
      "contact": "017838",
      "address": "mirpur_12",
      "img": "https://i.ibb.co/27wYrHm/Screenshot-84.png"
    },
    {
      "id": 3,
      "gender": "female",
      "name": "anika",
      "contact": "017838",
      "address": "mirpur_10",
      "img": "https://i.ibb.co/27wYrHm/Screenshot-84.png"
    },
    {
      "id": 4,
      "gender": "male",
      "name": "sabbir",
      "contact": "017838",
      "address": "mirpur_12",
      "img": "https://i.ibb.co/27wYrHm/Screenshot-84.png"
    }
  
  ]
  module.exports.getAllUsers = (req,res) =>{
    const {page, limit} = req.query;
      res.json(users.slice(0, limit));
    };
  
    module.exports.getUserDetails = (req, res) =>{
      const {id} = req.params;
      const foundUser = users.find(user => user.id == id);
      if(foundUser){
        res.status(200).send({
          success: true,
          messages: "Success",
          data: foundUser
        });
      }else{
        res.status(500).send({
          success: false,
          error: "Internal server error."
        });
      }
     
      
  };
  
  module.exports.saveUser = (req, res) =>{
      users.push(req.body);
      res.send(users)
  };
  
  // update a users details PATCH
  module.exports.updateUser = (req, res) =>{
      const {id} = req.params;
      // const filter = {id: id};
      const newData = users.find(user => user.id === Number(id));
      newData.id = id;
      newData.name = req.body.name;
      res.send(newData)
  };
  
  // delete a user usingid
  module.exports.deleteUser = (req, res) =>{
    const {id} = req.params;
    users = users.filter(user => user.id !== Number(id));
    res.send(users)
  }
  
  
  