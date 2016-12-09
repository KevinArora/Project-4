const express = require('express');
const router = express.Router();
const { createUser, findByUsername, authenticate } = require('../models/user');

// handle all the routes
// router.get('/check', findByUsername, authenticate, (req, res) => {
//   res.json(res.rows);
// });
router.post('/signup', createUser, (req, res) => {
  res.status(200).end();
});
router.post('/login', findByUsername, (req, res) => {
 res.json(res.rows)
  });


module.exports = router;
