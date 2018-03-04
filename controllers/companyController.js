var Firm = require('../models/firm');
var Company = require('../models/company');
var Executive = require('../models/executive');

var async = require('async');
var moment = require('moment');


exports.index = function(req, res, next) {

    // async.parallel({
    //     company_count: function(callback) {
    //         Company.count(callback);
    //     },
    //     executive_count: function(callback) {
    //         Executive.count(callback);
    //     },
    //     company_count: function(callback) {
    //         Company.count(callback);
    //     }
    // }, function(err, results) {
    //     res.render('index', { title: 'Researcher', error: err, data: results });
    // });
};

// Display list of all Companys.
exports.company_list = function(req, res, next) {

    Company.find()
        .sort([['company_name', 'descending']])
        .exec(function (err, list_companys) {
            if(err) { return next(err); }
            // Successful, so render
            res.render('company_list', { title: 'Company List', company_list: list_companys });
        })
};

// Display detail page for a specific Company.
exports.company_detail = function(req, res, next) {

    async.parallel({
        company: function(callback) {
            Company.findById(req.params.id)
                .exec(callback);
        }

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.company==null) { // No results.
            var err = new Error('Company not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('company_detail', { title: 'Company Detail', company: results.company } );
    });

};

// Display Company create form on GET.
exports.company_create_get = function(req, res, next) {

    // Get all authors and genres, which we can use for adding to our book.
    async.parallel({
        executives: function(callback) {
            Executive.find(callback);
        }
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('company_form', { title: 'Create Company',executives:results.executives });
    });
};

// Handle Company create on POST.
exports.company_create_post = function(req, res, next) {

    var company = new Company({
        company_name: req.body.company_name,
        executive: req.body.executive,
        portfolio_investment_date: req.body.portfolio_investment_date,
        leadership_page: req.body.leadership_page,
        titanhouse_page: req.body.titanhouse_page
    });

    company.save(function (err) {
        if (err) { return next(err); }
        // Successful - redirect to new company record.
        res.redirect(company.url);
    });
};

// Display Company delete form on GET.
exports.company_delete_get = function(req, res, next) {

    async.parallel({
        company: function(callback) {
            Company.findById(req.params.id).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.company==null) { // No results.
            res.redirect('/data/companys');
        }
        // Successful, so render.
        res.render('company_delete', { title: 'Delete Company', company: results.company } );
    });

};

// Handle Company delete on POST.
exports.company_delete_post = function(req, res, next) {

    Company.findByIdAndRemove(req.body.id, function deleteCompany(err) {
        if (err) { return next(err); }
        // Success - go to companys list.
        res.redirect('/data/companys');
    });
};

// Display Company update form on GET.
exports.company_update_get = function(req, res, next) {

    Company.findById(req.params.id, function (err, company) {
        if (err) { return next(err); }
        if (company == null) { // No results.
            var err = new Error('Company not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('company_form', { title: 'Update Company', company: company });

    });
};

// Handle Company update on POST.
exports.company_update_post = function(req, res, next) {

    var company = new Company(
        {
            company_name: req.body.company_name,
            portfolio_investment_date: { type: Date },
            leadership_page: req.body.leadership_page,
            titanhouse_page: req.body.titanhouse_page,
            _id: req.params.id
        }
    );

    // Data from form is valid. Update the record.
    Company.findByIdAndUpdate(req.params.id, company, {}, function (err, thecompany) {
        if (err) { return next(err); }
        // Successful - redirect to genre detail page.
        res.redirect(thecompany.url);
    });
};