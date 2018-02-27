var Firm = require('../models/firm');

// Display list of all Firms.
exports.firm_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm list');
};

// Display detail page for a specific Firm.
exports.firm_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm detail: ' + req.params.id);
};

// Display Firm create form on GET.
exports.firm_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm create GET');
};

// Handle Firm create on POST.
exports.firm_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm create POST');
};

// Display Firm delete form on GET.
exports.firm_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm delete GET');
};

// Handle Firm delete on POST.
exports.firm_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm delete POST');
};

// Display Firm update form on GET.
exports.firm_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm update GET');
};

// Handle Firm update on POST.
exports.firm_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Firm update POST');
};