const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  if (req.session === undefined) {
    return models.Sessions.create()
    .then(something => {

    })
  }
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

