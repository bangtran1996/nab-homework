const appConfig = require('../../config/app');
const kue = require('kue');
const repos = require('../repos');

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
    try {
        const { data } = job;
        return repos.Activity.create(data).then(done)
    } catch (e) {
        console.log('error ',e);
        return e;
    }
});

async function createUserActivity(data) {
    return queue.create('user_activity', data).save();
}

module.exports = {
    createUserActivity
}
