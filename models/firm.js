var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FirmSchema = new Schema(
    {
        firm_name: {type: String},
        companies: [{ type: Schema.Types.ObjectId, ref: 'Company' }]
    }
);

// Virtual for firm's URL
FirmSchema
.virtual('url')
.get(function () {
    return '/data/firm/'+this._id;
});

//Export model
module.exports = mongoose.model('Firm', FirmSchema);
