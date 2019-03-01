const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');
const secret = require('../auth/authenticate');
const jwt = require('jsonwebtoken');

const { authenticate } = require('../auth/authenticate');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function generateToken(user) {
  const payload = {
    subject: user
  }

  const options = {
    expiresIn: '1hr'
  }

  return jwt.sign(payload, secret.jwtKey, options)
}

function register(req, res) {
  // implement user registration
  const user = req.body
  const token = generateToken(user.username);
  if (user.username && user.password) {
    user.password = bcrypt.hashSync(user.password, 12);
    db('users').insert(user)
    .then(response => {
      res.status(200).json({user: user.username, token})
    })
  } else {
    res.status(400).json({message: 'please provede username and password to register.'})
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
