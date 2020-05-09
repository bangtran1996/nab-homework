
module.exports = function (router) {
    router.post('/login', function (req, res) {
        const username = req.body.username;
        const password = req.body.password;
        if (!username || !password) {
            return res.json({

            });
        }

    });
};
