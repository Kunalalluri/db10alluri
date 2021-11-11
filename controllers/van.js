var Van = require('../models/van');
// List of all vans
exports.van_list = async function(req, res) {
    try{
    theVan = await Van.find();
    res.send(theVan);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific van.
exports.van_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: van detail: ' + req.params.id);
};
// Handle van create on POST.
exports.van_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: van create POST');
};
// Handle van delete form on DELETE.
exports.van_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: van delete DELETE ' + req.params.id);
};
// Handle van update form on PUT.
exports.van_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: van update PUT' + req.params.id);
};