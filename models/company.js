var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompanySchema = new Schema(
    {
        company_name: String
        // leadership_page: {type: String},
        // titanhouse_page: {type: String}
    }
);

// Virtual for author's URL
CompanySchema
.virtual('url')
.get(function () {
    return '/data/company/' + this._id;
});

//Export model
module.exports = mongoose.model('Company', CompanySchema);