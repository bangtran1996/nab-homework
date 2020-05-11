const fs = require('fs');
const privateKey = fs.readFileSync('./config/rsa.pub.key');
let queueIsBackOff = true;
if (process.env.NAB_QUEUE_BACKOFF_ON &&
    process.env.NAB_QUEUE_BACKOFF_ON === false) {
    queueIsBackOff = false;
}

module.exports = {
    redis: {
        port: process.env.NAB_REDIS_PORT || 6379,
        host: process.env.NAB_REDIS_HOST || 'redis',
        auth: process.env.NAB_REDIS_PASSWORD || null,
        db: process.env.NAB_REDIS_DATABASE || 0,
    },
    alarm: {
        inactive_jobs: process.env.NAB_INACTIVE_JOBS || 1000,
    },
    queue: {
        prefix: process.env.NAB_JOBS_PREFIX || 'q',
        backOffType: process.env.NAB_QUEUE_BACK_OFF_TYPE || 'exponential',
        watchStuckJobs: process.env.NAB_QUEUE_WATCH_STUCK_JOBS || 1000 * 10,
        backOff: queueIsBackOff,
    },
    jwt: {
        secretToken: process.env.NAB_JWT_SECRET || '!@#!@asd',
        algorithm: process.env.NAB_JWT_ALGORITHM || 'HS256',
        expireIn: process.env.NAB_JWT_EXPIRE_IN || '36h',
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
