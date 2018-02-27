var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExecutiveSchema = new Schema(
    {
        executive_name: {type: String, required: true, max: 100},
        bloomberg_page: {type: String, max: 100}
    }
);

// Virtual for executive's URL
ExecutiveSchema
    .virtual('url')
    .get(function () {
        return '/data/executive/' + this._id;
    });

//Export model
module.exports = mongoose.model('Executive', ExecutiveSchema);
