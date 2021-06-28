const jwt = require('jsonwebtoken');

const jwtExpiry = process.env.JWT_EXPIRY;
const jwtToken = process.env.JWT_SECRET;

function generateAccessToken(user) {
  const payload = {
    username: user.username,
    email: user.email,
  }

  return jwt.sign(payload, jwtToken, { expiresIn: jwtExpiry });
}


module.exports = {
  generateAccessToken,
}
