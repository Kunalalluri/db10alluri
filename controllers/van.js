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
exports.van_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Van();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.names = req.body.names;
    document.colour = req.body.colour;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle van delete form on DELETE.
exports.van_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: van delete DELETE ' + req.params.id);
};
// Handle van update form on PUT.
exports.van_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: van update PUT' + req.params.id);
};



// VIEWS
// Handle a show all view
exports.van_view_all_Page = async function(req, res) {
    try{
    thevans = await Van.find();
    res.render('van', { title: 'Van Search Results', results: thevans });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };