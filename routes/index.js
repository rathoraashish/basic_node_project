const express = require('express');
const app = express();
const router = express.Router();
const User = require('../controllers/user');
const responseMessage = require('../utils/responseMessage');

router.get('/', (req, res) => {
    var user = "Ashish";
    res.render('home', {user:user});
})

router.get('/about', (req, res) => {
    var user = "Ashish";
    res.render('about', {user:user});
})

router.post('/addUsers',async (req,res)=>{
    try {
        console.log("Data from postman",req.data);
        const data = await User.addUser(req)
        console.log("data:response)__", data);
        return responseMessage(null, data)
      } catch (err) {
        console.log("Error::index.js))", err);
        return responseMessage(err, null)
      }
})

module.exports = router;