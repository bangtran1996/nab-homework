const appConfig = require('../../config/app');
const kue = require('kue');
const
const queue = kue.createQueue({
    ...appConfig.queue,
    redis: appConfig.redis,
});

queue.watchStuckJobs(appConfig.queue.watchStuckJobs);
queue.inactiveCount((err, total) => {
    console.error('error ', err);
    if (total > appConfig.alarm.inactive_jobs) {
        // send alert to slack
    }
});

queue.on('error', (err) => {
    console.error('error ', err);
    // send alert to slack
});

queue.process('user_activity', (job, done) => {
    return done();
});

async function createUserActivity(data) {
    return queue.create('user_activity', data).save();
}

module.exports = {
    createUserActivity
}
