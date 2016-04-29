'use strict';

const nock = require('nock');
let Sheetsu = require('../index');
const co = require('co');
require('co-mocha');

const expect = require('chai').expect;

const test_url = 'https://sheetsu.com/apis/020b2c0f';

enableNock();
//nock.recorder.rec();

describe('Testing getAll', function() {
    it('should return data by promise', function* () {

        let dev = new Sheetsu(test_url);
        let data = yield dev.getAll();
        expect(data).to.have.property('meta').to.have.property('code').to.equal(200);
    });
    it('should return data by callback', function (done) {
        let dev = new Sheetsu(test_url);
        dev.getAll(function(err, data) {
            expect(err).to.equal(null);
            expect(data).to.have.property('meta').to.have.property('code').to.equal(200);
            done();
        });
    });
});

describe('Testing get', function() {
    it('should return data by promise', function* () {

        let dev = new Sheetsu(test_url);
        let data = yield dev.get({column_name: 'id'});
        expect(data).to.have.property('meta').to.have.property('code').to.equal(200);
        expect(data).to.have.property('data').to.be.an('array').to.have.length.above(0);
    });
    it('should return data by callback', function (done) {
        let dev = new Sheetsu(test_url);
        dev.get({column_name: 'name'}, function(err, data) {
            expect(err).to.equal(null);
            expect(data).to.have.property('meta').to.have.property('code').to.equal(200);
            expect(data).to.have.property('data').to.be.an('array').to.have.length.above(0);
            done();
        });
    });
});

describe('Testing add', function() {
    it('should return data by promise', function* () {

        let dev = new Sheetsu(test_url);
        let data = yield dev.add({ "id": 6, "name": "Glenn", "score": 69 });
        expect(data).to.have.property('meta').to.have.property('code').to.equal(201);
        expect(data).to.have.property('data');
    });
    it('should return data by callback', function (done) {
        let dev = new Sheetsu(test_url);
        dev.add({ "id": 6, "name": "Glenn", "score": 69 }, function(err, data) {
            expect(err).to.equal(null);
            expect(data).to.have.property('meta').to.have.property('code').to.equal(201);
            expect(data).to.have.property('data');
            done();
        });
    });
});

function enableNock() {
    nock('https://sheetsu.com:443', {"encodedQueryParams":true})
      .get('/apis/020b2c0f')
      .reply(200, {"status":200,"success":true,"result":[{"id":"1","name":"Peter","score":"43"},{"id":"2","name":"Lois","score":"89"},{"id":"3","name":"Meg","score":"10"},{"id":"4","name":"Chris","score":"43"},{"id":"5","name":"Stewie","score":"72"},{"id":"6","name":"Glenn","score":"69"},{"id":"1","name":"test eyuva","score":"5"},{"id":"6","name":"Glenn","score":"69"},{"id":"6","name":"Glenn","score":"69"},{"id":"1","name":"Mihran","score":"10"},{"id":"1","name":"Mihran","score":"10"},{"id":"1","name":"Mihran","score":"10"},{"id":"1","name":"Mihran","score":"10"}]}, { server: 'nginx',
      date: 'Fri, 29 Apr 2016 09:39:46 GMT',
      'content-type': 'application/json',
      'content-length': '553',
      connection: 'close',
      status: '200 OK',
      etag: 'W/"ab8506791e6699df867241217cb0f072"',
      'cache-control': 'max-age=0, private, must-revalidate',
      'x-request-id': '53f28010-13ab-4dca-b6d5-08675032d6ed',
      'x-runtime': '1.081591',
      vary: 'Origin' });

    nock('https://sheetsu.com:443', {"encodedQueryParams":true})
        .get('/apis/020b2c0f')
        .reply(200, {"status":200,"success":true,"result":[{"id":"1","name":"Peter","score":"43"},{"id":"2","name":"Lois","score":"89"},{"id":"3","name":"Meg","score":"10"},{"id":"4","name":"Chris","score":"43"},{"id":"5","name":"Stewie","score":"72"},{"id":"6","name":"Glenn","score":"69"},{"id":"1","name":"test eyuva","score":"5"},{"id":"6","name":"Glenn","score":"69"},{"id":"6","name":"Glenn","score":"69"},{"id":"1","name":"Mihran","score":"10"},{"id":"1","name":"Mihran","score":"10"},{"id":"1","name":"Mihran","score":"10"},{"id":"1","name":"Mihran","score":"10"}]}, { server: 'nginx',
        date: 'Fri, 29 Apr 2016 09:44:45 GMT',
        'content-type': 'application/json',
        'content-length': '553',
        connection: 'close',
        status: '200 OK',
        etag: 'W/"ab8506791e6699df867241217cb0f072"',
        'cache-control': 'max-age=0, private, must-revalidate',
        'x-request-id': '7f5c683f-149d-4ed2-9d0e-80fe5d86ca78',
        'x-runtime': '0.957651',
        vary: 'Origin' });

    nock('https://sheetsu.com:443', {"encodedQueryParams":true})
      .get('/apis/020b2c0f/column/id')
      .reply(200, {"status":200,"success":true,"result":["1","2","3","4","5","6","1","6","6","1","1","1","1"]}, { server: 'nginx',
      date: 'Fri, 29 Apr 2016 09:50:50 GMT',
      'content-type': 'application/json',
      'content-length': '92',
      connection: 'close',
      status: '200 OK',
      etag: 'W/"1e7e9dcb6c235cc5eed99a9e792df511"',
      'cache-control': 'max-age=0, private, must-revalidate',
      'x-request-id': '5e899360-9af9-4a7d-8345-8c19baca6667',
      'x-runtime': '0.914874',
      vary: 'Origin' });

    nock('https://sheetsu.com:443', {"encodedQueryParams":true})
    .get('/apis/020b2c0f/column/name')
    .reply(200, {"status":200,"success":true,"result":["Peter","Lois","Meg","Chris","Stewie","Glenn","test eyuva","Glenn","Glenn","Mihran","Mihran","Mihran","Mihran"]}, { server: 'nginx',
    date: 'Fri, 29 Apr 2016 09:50:56 GMT',
    'content-type': 'application/json',
    'content-length': '151',
    connection: 'close',
    status: '200 OK',
    etag: 'W/"bf050b5e74aa22b225d14951bd4f1e50"',
    'cache-control': 'max-age=0, private, must-revalidate',
    'x-request-id': 'd0fb93df-9dc8-4fea-b628-4d8019ea7cf6',
    'x-runtime': '1.163326',
    vary: 'Origin' });

    nock('https://sheetsu.com:443', {"encodedQueryParams":true})
      .post('/apis/020b2c0f', {"id":6,"name":"Glenn","score":69})
      .reply(201, {"status":201,"success":true,"result":"Created."}, { server: 'nginx',
      date: 'Fri, 29 Apr 2016 16:18:12 GMT',
      'content-type': 'application/json',
      'content-length': '49',
      connection: 'close',
      status: '201 Created',
      etag: 'W/"35ce81353fb8a5555bb561c021d19dc3"',
      'cache-control': 'max-age=0, private, must-revalidate',
      'x-request-id': '0ff7827d-4bf5-48d9-89f3-ee71783b0cf7',
      'x-runtime': '2.962968',
      vary: 'Origin' });

      nock('https://sheetsu.com:443', {"encodedQueryParams":true})
        .post('/apis/020b2c0f', {"id":6,"name":"Glenn","score":69})
        .reply(201, {"status":201,"success":true,"result":"Created."}, { server: 'nginx',
        date: 'Fri, 29 Apr 2016 16:18:16 GMT',
        'content-type': 'application/json',
        'content-length': '49',
        connection: 'close',
        status: '201 Created',
        etag: 'W/"35ce81353fb8a5555bb561c021d19dc3"',
        'cache-control': 'max-age=0, private, must-revalidate',
        'x-request-id': '9f01f8e6-d9fb-49e9-9f61-0c13b73ea662',
        'x-runtime': '2.457570',
        vary: 'Origin' });
}
