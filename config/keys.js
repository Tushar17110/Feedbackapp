//keys.js - what set of credentials to return.

if (process.env.NODE_ENV === 'production'){
    //we are in the production - return the prod set of keys
    module.exports = require('./prod');
} else {
    //we are in the development - return the dev keys.
    module.exports = require('./dev');
}