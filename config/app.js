const fs = require('fs');
const privateKey = fs.readFileSync('./config/rsa.pub.key');

module.exports = {
    jwt: {
        secretToken: process.env.NAB_JWT_SECRET || '!@#!@asd',
        algorithm: process.env.NAB_JWT_ALGORITHM || 'RS256',
        expireIn:  process.env.NAB_JWT_EXPIRE_IN || '36h',
        privateKey: process.env.NAB_JWT_PRIVATE_KEY || privateKey,
    },
    database: {
        name: process.env.NAB_DB_NAME || 'nab_db',
        username: process.env.NAB_DB_USERNAME || 'postgres',
        password: process.env.NAB_DB_PASSWORD || 'change_me',
        config: {
            host: process.env.NAB_DB_HOST || "appdb",
            dialect: process.env.NAB_DB_DIALECT || "postgres",
            pool: {
                max: parseInt(process.env.NAB_DB_POOL_MAX, 10) || 5,
                min: parseInt(process.env.NAB_DB_POOL_MIN, 10) || 0,
                acquire: parseInt(process.env.NAB_DB_ACQUIRE, 10) || 30000,
                idle: parseInt(process.env.NAB_DB_IDLE, 10) || 10000
            }
        }
    }
}
