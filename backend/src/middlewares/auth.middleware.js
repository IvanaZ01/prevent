const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    console.log('No token at all.');
    
    res.status(401).send('No JWT token.');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log({err});
    console.log('Invalid token.');

    if (err) {
      return res.status(400).send('JWT token is not valid.');
    }

    req.user = user;
    next()
  });
}

module.exports = {
  authenticateToken,
}