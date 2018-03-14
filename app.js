const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//load user model
//load user model
require('./models/NewUser');
const User = mongoose.model('users');

//load keys
const keys = require('./config/keys');
//connecting db
mongoose.connect(keys.mongoURI, {
  
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();
//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())



app.get('/home', (req,res) => {
res.json({
    notes:"hey dude",
    sub: "maths",
    pages:"20"
})
});
app.post('/Signup', (req,res) =>{
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        id: req.body.id,
        gender: req.body.gender
      }
      new User(newUser)
      .save()
      .then(() =>{
          console.log('user saved to db');
      });


})
port = 3000;

app.listen(port, () => {
console.log(`server started on port ${port}`);
});