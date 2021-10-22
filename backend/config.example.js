/* 
  This is how the config.js file should look like.
  Remember to edit all values to your own db username, password and cluster name.
*/
require('dotenv').config();
const username = 'foo';
const pass = 'bar';
const myCluster =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGODB_TEST_URI
    : process.env.MONGODB;

module.exports = {
  username,
  pass,
  myCluster,
};
