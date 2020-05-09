module.exports = {
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
