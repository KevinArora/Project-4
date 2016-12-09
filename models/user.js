const db = require('../lib/dbConnect.js');

function createUser(req, res, next) {
 db.one(`INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *;`, [req.body.username, req.body.password])
   .then((data) => res.rows = data)
   .then(() => next())
   .catch((err) => {
     console.log(err);
     next(err);
   });
}

function findByUsername(req, res, next) {
db.one('SELECT * FROM users WHERE name = $1', [req.body.username])
  .then((data) => res.rows = data)
  .then(() => next())
  .catch(err => next(err));
}
function authenticate(req, res, next) {
  if(res.rows.password === req.body.password){
    next();
  }

}

module.exports = {
 createUser,
 findByUsername
};









// const db = require('../lib/dbConnect');
// var jwt = require('jsonwebtoken');

// const SECRET = 'livingispain';

// function createUser(req, res, next) {
//   db.none(`INSERT INTO users (name,password) VALUES ($1,$2);`,[req.body.username, req.body.password])
//   .then (() => {
//     res.rows = jwt.sign({ name: req.body.username }, SECRET);
//     next();
//   })
//   .catch(err => next(err));
// }

// // below are functions that will pass stuff into react
// function authenticate (req, res, next) {
//   const token = req.headers.token || req.params.token || req.body.token || req.query.token;
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, SECRET, (err, decoded) => {
//       if (err) return next(err);
//       next();
//     });
//   });
// }

// function logIn (req, res, next) {
//   db.one('SELECT * FROM users WHERE name = $1;', [req.body.username])
//   .then((user) => {
//     if (user.password != req.body.password) next(new Error ('Incorrect password'));
//     res.rows = jwt.sign({ name: user.name }, SECRET);
//     next();
//   })
//   .catch(err => next(err));

//   // return new Promise((resolve, reject) => {
//   //   jwt.sign({ name:  }, SECRET, (err, decoded) => {
//   //     if (err) return reject(err);
//   //     resolve(true);
//   //   });
//   // });
// }

// // fetch('/db/gardens/users', {
// //   body: {
// //     username: this.props.username,
// //     password: this.props.password,
// //   },
// //   method: 'POST'
// // })
// // .then(r => r.json())
// // .then(token => {
// //   this.props.saveToken(token);
// //   // this.setState({
// //   //   token: token,
// //   // });
// // })
// // .catch(err => console.log(err));

// // fetch('/db/gardens/users', {
// //   headers: {
// //     token: this.state.token,
// //   },
// //   method: 'GET',
// // })
// // .then(r => r.json())
// // .then(data => {
// //   // do stuff with the data
// // })

// module.exports = {
//   createUser,
//   authenticate,
//   logIn,
// }

