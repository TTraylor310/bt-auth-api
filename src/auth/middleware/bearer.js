'use strict';

const { users } = require('../../models');

async function bearerAuth(req, res, next) {
  try {
    if (!req.headers.authorization) _authError();
    const token = req.headers.authorization.split(' ')[1];
    const validUser = await users.authenticateToken(token);
    req.user = validUser;
    req.token = validUser.token;
    next();
  } catch (e) {
    console.error('Error in bearer.js:', e.message);
    _authError();
  }

  function _authError() {
    next('Invalid Login');
  }
}

module.exports = bearerAuth;
