const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 //Create Schema
 const UserSchema = new Schema({
     username:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true
     },
     id:{
         type:String,
         required:true
     },
     gender:{
         type:String,
         required:true
     }


 });
 mongoose.model('users',UserSchema,'users')