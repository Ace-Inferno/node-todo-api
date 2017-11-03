const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require('./../server/models/User');

//Todo.remove({}).then((result)=> {
//  console.log(result);
//});

Todo.findByIdAndRemove("59fba2b746869591a8b8ef31").then((todo)=> {
  console.log(todo);
});
