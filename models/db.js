var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@ds031531.mongolab.com:31531/passportdb');

module.exports = mongoose.connection;