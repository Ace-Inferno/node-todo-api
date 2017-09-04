//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if(err) {
     return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
/*
db.collection('Users').deleteMany({name: 'Mathew'}).then((result)=> {
  console.log(result);
});

  //deleteOne
db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  console.log(result);
});
*/
  //findOneAndDelete
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("59aa1d94826aa941b4f33869")
}).then((result) => {
  console.log(JSON.stringify(result, undefined, 2));
});

  //db.close();
});
