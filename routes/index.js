const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const User = require('../controllers/user');
const responseMessage = require('../utils/responseMessage');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    var user = "Ashish";
    res.render('home', {user:user});
})

router.get('/about', (req, res) => {
    var user = "Ashish";
    res.render('about', {user:user});
})

// -------------Post request for insert user--------------------

router.post('/addUser',async (req,res)=>{
    try {
        // console.log("Data from postman",req.body);
        const data = await User.addUser(req)
        console.log("data:response)__", data);
        res.send({
          "status":200,
          "message":"User inserted successfuly",
          "data":req.body
        })
        return responseMessage(null, data)
      } catch (err) {
        console.log("Error::index.js))", err);
        res.send({
          "status":400,
          "message":"failed to insert user",
          "data":err
        })
        return responseMessage(err, null)
      }
})

// -------------Post request for update user--------------------

router.post('/updateUser',async (req,res)=>{
  try {
      // console.log("Data from postman",req.body);
      const data = await User.updateUser(req)
      console.log("data:response)__", data);
      res.send({
        "status":200,
        "message":"User updated successfuly",
        "data":req.body
      })
      return responseMessage(null, data)
    } catch (err) {
      console.log("Error::index.js))", err);
      res.send({
        "status":400,
        "message":"failed to updated user",
        "data":err
      })
      return responseMessage(err, null)
    }
})
module.exports = router;