
const { errors } = require('../constants');
const repo = require('../db/repos');
const userLib = require('../helpers/crypto');
module.exports = function (router) {
    router.post('/login', async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        try {
            if (!username || !password) {
                return res.status(400).json({
                    errors: [errors.auth_missing_username_password],
                    message: 'username or password missing',
                });
            }

            const admin = await repo.Admin.getByAdminname(username);
            if (!admin) {
                return res.status(404).json({
                    errors: [errors.auth_account_not_found],
                    message: 'account not found',
                });
            }

            const isValid = await userLib.comparePass(password, admin.password);
            if (!isValid) {
                return res.status(401).json({
                    errors: [errors.auth_incorrect_credential],
                    message: 'invalid username/pass',
                });
            }

            const token = await userLib.createTokenFromAdmin(admin);
            return res.status(200).json({
                data: token,
            });
        } catch (e) {
            return res.status(500).json({
                errors: [errors.internal_error],
                message: e.message,
            });
        }
    });
};
