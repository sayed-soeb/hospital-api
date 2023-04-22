const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

require('dotenv').config();
// Connect to MongoDB
mongoose.connect(process.env.DbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// acquire connection (to check if its successful)
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
console.log('Connected to Database :: MongoDB');
});

app.use(
  express.urlencoded({ extended: true })
);
// app.use(express.json());

//import or use express router 
app.use('/', require('./routes/index'));


app.listen(port, function (err) {
  if (err) {
    console.log('error', err);
  }

  console.log(`Server is running on port: ${port}`);
});