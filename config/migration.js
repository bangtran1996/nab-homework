module.exports = {
    development: {
        username: "postgres",
        password: "change_me",
        database: "nab_db",
        host: "127.0.0.1",
        dialect: "postgres",
        operatorsAliases: false
    },
    production: {
        username: process.env.NAB_MIGRATION_PROD_DB_USERNAME,
        password: process.env.NAB_MIGRATION_PROD_DB_PASSWORD,
        database: process.env.NAB_MIGRATION_PROD_DB_NAME,
        host: process.env.NAB_MIGRATION_PROD_DB_HOSTNAME,
        dialect: "postgres",
        operatorsAliases: false
    }
}
