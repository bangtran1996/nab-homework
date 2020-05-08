let IndexModel = require('../models/index');

module.exports = function (router) {
    let model = new IndexModel();
    router.get('/', function (req, res) {
        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
    });

};
