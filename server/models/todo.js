var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type:Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
//export otherwise we cant use it in files that require this one
module.exports = {Todo};
