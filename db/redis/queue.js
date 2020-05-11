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
        // this can get so many information from client and save it into database
        // like ip, browser, fingperint, device ...
        // but to implement everything as i wanted, will take quite a lot time.
        // so i will keep it simple as first
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
