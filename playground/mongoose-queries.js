const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aa9acab1e0b77222c5ba725'
User.find({
  _id: id
}).then((users) => {
  console.log('Users', users);
});

Todo.findById(id).then((user) => {
  if ( !user ){
    return console.log('Id not found');
  }
  console.log('User By Id', user);
}).catch((e) => console.log(e));

// var id = '5aab3e0c5ed5c00ff5293bba1';
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// } else {
//
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if ( !todo ){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
