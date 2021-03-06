var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    type: {type: String, required: true},
    seen: {type: Boolean, default: false},
    timeStamp: {type: String, required: true}
});

module.exports = mongoose.model('Eventlog', schema);