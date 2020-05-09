
const jwt = require('jsonwebtoken');
const config = require('../config/app');
const bcrypt = require('bcrypt');

module.exports = {
    comparePass: (inputPass, passHash) => {
        return bcrypt.compare(inputPass, passHash);
    },

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
                return jwt.verify(jwtInputToken, config.jwt.privateKey, { algorithm: config.jwt.algorithm })
            }
            return null
        } catch (err) {
            throw err
        }
    }
}
