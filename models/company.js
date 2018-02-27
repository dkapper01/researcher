var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CompanySchema = new Schema(
    {
        company_name: {type: String, required: true, max: 100},
        // investment_date: {type: Date},
        leadership_page: {type: String, max: 1100 },
        titanhouse_page: {type: String, max: 1100 },
        executives: [{ type: Schema.Types.ObjectId, ref: 'Executive'}]
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