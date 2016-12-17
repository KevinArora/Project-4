'use strict';
require('dotenv').config({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
// const history = require('connect-history-api-fallback');
const cookieParser  = require('cookie-parser');
const usersRouter   = require('./routes/users');


const dbRouter = require('./routes/db.js');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(logger('dev'));
// app.use(history({ logger: logger }));

app.listen(PORT, () => console.log('Server is listening on port', PORT));

app.use('/users', usersRouter);
app.use('/api/youtube', require('./routes/youtube.js'))
