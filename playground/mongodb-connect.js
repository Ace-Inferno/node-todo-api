//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//identical to code above
/*var user = {name: 'Mathew', age:21};
var{name} = user;
console.log(name);
*/
//es6 destructuring
//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
     return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  */
  /*db.collection('Users').insertOne({
    name: 'Mathew',
    age: 21,
    location: 'Kingman'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user', err);
    }
    //console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });
*/
  db.close();
  //closes connection with mongo db server
});