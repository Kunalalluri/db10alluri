var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var van_controller = require('../controllers/van');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// van ROUTES ///
// POST request for creating a van.
router.post('/resource/vans', van_controller.van_create_post);
// DELETE request to delete van.
router.delete('/resource/vans/:id', van_controller.van_delete);
// PUT request to update van.
router.put('/resource/vans/:id',
van_controller.van_update_put);
// GET request for one van.
router.get('/resource/vans/:id', van_controller.van_detail);
// GET request for list of all van items.
router.get('/resource/vans', van_controller.van_list);
module.exports = router;