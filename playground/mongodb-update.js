
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if ( err ) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aa87a479403d9eea1f8fe7b')
  // }, {
  //   $set:{
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aa96816c8dcf960ad797e5b')
  }, {
    $inc:{
      age:1
    },
    $set:{
      name: 'DJ'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //client.close();
});
