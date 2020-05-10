/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


let kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
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
        this.timeout(200000);

    });


    afterEach(function (done) {
        mock.close(done);
    });


    it('should have model name "index"', function (done) {
        request(mock)
            .get('/')
            .expect(200)
            .expect('Content-Type', /html/)
                .expect(/"name": "index"/)
            .end(function (err, res) {
                done(err);
            });
    });

});
