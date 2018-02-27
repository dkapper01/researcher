var Company = require('../models/company');

var async = require('async');

exports.index = function(req, res, next) {

    async.parallel({
        company_count: function(callback) {
            Company.count(callback);
        },
        executive_count: function(callback) {
            Executive.count(callback);
        },
        firm_count: function(callback) {
            Firm.count(callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Researcher', error: err, data: results });
    });
};

// Display list of all Companys.
exports.company_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Company list');
};

// Display detail page for a specific Company.
exports.company_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Company detail: ' + req.params.id);
};

// Display Company create form on GET.
exports.company_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Company create GET');
};

// Handle Company create on POST.
exports.company_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Company create POST');
};

// Display Company delete form on GET.
exports.company_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Company delete GET');
};

// Handle Company delete on POST.
exports.company_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Company delete POST');
};

// Display Company update form on GET.
exports.company_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Company update GET');
};

// Handle Company update on POST.
exports.company_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Company update POST');
};