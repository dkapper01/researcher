var Firm = require('../models/firm');
var Company = require('../models/company');
var Executive = require('../models/executive');

var async = require('async');

// Display list of all Firms.
exports.firm_list = function(req, res, next) {

    Firm.find()
        .exec(function (err, list_firms) {
            if(err) { return next(err); }
            // Successful, so render
            res.render('firm_list', { title: 'Firm List', firm_list: list_firms });
        })
};

// Display detail page for a specific Firm.
exports.firm_detail = function(req, res, next) {

    async.parallel({
        firm: function(callback) {
            Firm.findById(req.params.id)
                .exec(callback);
        }

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.firm==null) { // No results.
            var err = new Error('Firm not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render
        res.render('firm_detail', { title: 'Firm Detail', firm: results.firm } );
    });

};

// Display Firm create form on GET.
exports.firm_create_get = function(req, res) {
    res.render('firm_form', { title: "Create Firm" });
};

// Handle Firm create on POST.
exports.firm_create_post = function(req, res) {

    var firm = new Firm({
        firm_name: req.body.firm_name
    });

    firm.save(function (err) {
        if (err) { return next(err); }
        // Successful - redirect to new firm record.
        res.redirect(firm.url);
    });
};

// Display Firm delete form on GET.
exports.firm_delete_get = function(req, res, next) {

    async.parallel({
        firm: function(callback) {
            Firm.findById(req.params.id).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.firm==null) { // No results.
            res.redirect('/data/firms');
        }
        // Successful, so render.
        res.render('firm_delete', { title: 'Delete Firm', firm: results.firm } );
    });

};

// Handle Firm delete on POST.
exports.firm_delete_post = function(req, res, next) {

    Firm.findByIdAndRemove(req.body.id, function deleteFirm(err) {
        if (err) { return next(err); }
        // Success - go to firms list.
        res.redirect('/data/firms');
    });
};

// Display Firm update form on GET.
exports.firm_update_get = function(req, res, next) {

    Firm.findById(req.params.id, function (err, firm) {
        if (err) { return next(err); }
        if (firm == null) { // No results.
            var err = new Error('Firm not found');
            err.status = 404;
            return next(err);
        }
        // Success.
        res.render('firm_form', { title: 'Update Firm', firm: firm });

    });
};

// Handle Firm update on POST.
exports.firm_update_post = function(req, res, next) {
    
    var firm = new Firm(
        {
            firm_name: req.body.firm_name
        }    
    );

    // Data from form is valid. Update the record.
    Firm.findByIdAndUpdate(req.params.id, firm, {}, function (err, thefirm) {
        if (err) { return next(err); }
        // Successful - redirect to genre detail page.
        res.redirect(thefirm.url);
    });
};