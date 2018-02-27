var Company = require('../models/company');

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