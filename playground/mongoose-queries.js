const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require('./../server/models/User');


// var id = '59d2e4d09b43fb1024ed39b8';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos)=> {
//   console.log('Todos', todos);
// });
//
// Todo.findOne ({
//  _id: id
// }).then((todo)=> {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=> {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e)=> console.log(e));

User.findById('59af0eb5a6d06b16ec379d3d').then((user)=> {
  if(!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2))
}, (e)=> {
  console.log(e);
});
