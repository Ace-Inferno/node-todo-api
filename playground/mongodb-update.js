//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
     return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to MongoDB server');
/*
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('59aa1413c7aa2a412049d081')
}, {
  $set: {
    name: "Mathew"
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result)
});
*/

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('59aa1413c7aa2a412049d081')
}, {
  $inc: {
    age: 4
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});
  //db.close();
});
