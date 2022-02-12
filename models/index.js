const dbConfig = require('../config/dbConfig');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {}

db.mongoose = mongoose
db.url = dbConfig.url
db.Customer = require('./customer')(mongoose)
db.Queue = require('./queue')(mongoose)

module.exports = db;