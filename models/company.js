var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var CompanySchema = new Schema(
    {
        company_name: {type: String},
        executive: {type: Schema.ObjectId, ref: 'Executive'},
        portfolio_investment_date: { type: Date },
        leadership_page: {type: String},
        titanhouse_page: {type: String}
    }
);

CompanySchema
.virtual('portfolio_investment_date_yyyy_mm_dd')
.get(function () {
    return moment(this.portfolio_investment_date).format('YYYY-MM-DD');
});

// Virtual for company's URL
CompanySchema
.virtual('url')
.get(function () {
    return '/data/company/' + this._id;
});

//Export model
module.exports = mongoose.model('Company', CompanySchema);