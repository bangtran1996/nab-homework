
const jwt = require('jsonwebtoken');
const config = require('../config/app');

module.exports = {
    createTokenFromUser: async payload => {
        try {
            return jwt.sign(
                payload,
                config.jwt.privateKey,
                { algorithm: config.jwt.algorithm, expiresIn: config.jwt.expireIn });
        } catch (e) {
            throw e
        }
    },

    getUserFromToken: jwtInputToken => {
        try {
            if (jwtInputToken) {
                return jwt.verify(jwtInputToken, config.jwt.secretToken, { algorithm: config.jwt.algorithm })
            }
            return null
        } catch (err) {
            throw err
        }
    }
}
