/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


let kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    models = require('../db/models'),
    request = require('supertest');


describe('index', function () {
    let app, mock;
    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        mock = app.listen(1337);
        this.timeout(10000);

    });


    afterEach(function (done) {
        // console.log('hello', models);
        this.timeout(10000);
        models.sequelize.close(() => {
            mock.close(done);
        });
    });

    it('should ok when login with username password for admin', function (done) {
        request(mock)
            .post('/admin/login')
            .expect(200)
            .send({ "username": "diepbang", "password": "123456789" })
            .end(function (err, res) {
                console.log(res.body);
                done(err);
            });
    });
});
