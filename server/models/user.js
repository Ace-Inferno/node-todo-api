<<<<<<< HEAD
var mongoose = require('mongoose');
var validator = require('validator');
=======
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
>>>>>>> 4a64980fd65e1843422616039b393d80e4640264

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
<<<<<<< HEAD
      message: `{VALUE} is not a valid email`
=======
      message: `{VALUE} is not a valis email`
>>>>>>> 4a64980fd65e1843422616039b393d80e4640264
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
<<<<<<< HEAD

  },
  tokens: [{
    access:{
      type: String,
      required: true
    },
    token:{
      type: String,
=======
  },
  tokens: [{
    access: {
      type:String,
      required: true
    },
    token: {
      type:String,
>>>>>>> 4a64980fd65e1843422616039b393d80e4640264
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function (){
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email'])
};

//arrow functions dont bind this keyword
UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  //save returns a promise so you can use then
  return user.save().then(() => {
    return token;
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User};
