var express = require('express');

var router = express.Router();

// Require controller modules.
var company_controller = require('../controllers/companyController');
var executive_controller = require('../controllers/executiveController');
var firm_controller = require('../controllers/firmController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', company_controller.index);

// GET request for creating a Company. NOTE This must come before routes that display Company (uses id).
router.get('/company/create', company_controller.company_create_get);

// POST request for creating Company.
router.post('/company/create', company_controller.company_create_post);

// GET request to delete Company.
router.get('/company/:id/delete', company_controller.company_delete_get);

// POST request to delete Company.
router.post('/company/:id/delete', company_controller.company_delete_post);

// GET request to update Company.
router.get('/company/:id/update', company_controller.company_update_get);

// POST request to update Company.
router.post('/company/:id/update', company_controller.company_update_post);

// GET request for one Company.
router.get('/company/:id', company_controller.company_detail);

// GET request for list of all Company items.
router.get('/companys', company_controller.company_list);

/// AUTHOR ROUTES ///

// GET request for creating Executive. NOTE This must come before route for id (i.e. display executive).
router.get('/executive/create', executive_controller.executive_create_get);

// POST request for creating Executive.
router.post('/executive/create', executive_controller.executive_create_post);

// GET request to delete Executive.
router.get('/executive/:id/delete', executive_controller.executive_delete_get);

// POST request to delete Executive.
router.post('/executive/:id/delete', executive_controller.executive_delete_post);

// GET request to update Executive.
router.get('/executive/:id/update', executive_controller.executive_update_get);

// POST request to update Executive.
router.post('/executive/:id/update', executive_controller.executive_update_post);

// GET request for one Executive.
router.get('/executive/:id', executive_controller.executive_detail);

// GET request for list of all Executives.
router.get('/executives', executive_controller.executive_list);

/// GENRE ROUTES ///

// GET request for creating a Firm. NOTE This must come before route that displays Firm (uses id).
router.get('/firm/create', firm_controller.firm_create_get);

//POST request for creating Firm.
router.post('/firm/create', firm_controller.firm_create_post);

// GET request to delete Firm.
router.get('/firm/:id/delete', firm_controller.firm_delete_get);

// POST request to delete Firm.
router.post('/firm/:id/delete', firm_controller.firm_delete_post);

// GET request to update Firm.
router.get('/firm/:id/update', firm_controller.firm_update_get);

// POST request to update Firm.
router.post('/firm/:id/update', firm_controller.firm_update_post);

// GET request for one Firm.
router.get('/firm/:id', firm_controller.firm_detail);

// GET request for list of all Firm.
router.get('/firms', firm_controller.firm_list);


module.exports = router;