const { verify } = require('jsonwebtoken');
const { APP_SECRET } = require('../constants');

class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

function getUserId(context) {
  const Authorization = context.req.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
}

module.exports = getUserId;
