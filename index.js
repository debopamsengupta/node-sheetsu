'use strict';
const request = require('request');

class Sheetsu {
    constructor(url) {
        this.url = url;
    }

    getAllData(callback) {
        let get_url = this.url;
        let request_params = {
            url : get_url,
            method: 'GET'
        };
        request(request_params, function(err, response, body) {
            if(err) {
                throw(err);
            }
            body = JSON.parse(body);
            if(body.status === 200 && body.success === true) {
                let results = body.result;
                callback({meta:{code: 200}, data: results});
            }
        });
    }

    getData(params, callback) {
        let get_url = this.url + '/column/:column_name';
        let request_params = {
            url : get_url.replace(':column_name', params.column_name),
            method: 'GET'
        };
        request(request_params, function(err, response, body) {
            if(err) {
                throw(err);
            }
            body = JSON.parse(body);
            if(body.status === 200 && body.success === true) {
                let results = body.result;
                callback({meta:{code: 200}, data: results});
            }
        });
    }

    addRow(params, callback) {
        let request_params = {
            url : this.url,
            method: 'POST',
            json: params,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        request(request_params, function(err,response,body){
            if(err) {
                throw(err);
            }
            if(body.status === 201 && body.success === true) {
                callback({meta: {code:201} , data:[]});
            }
        });
    }

    get(params) {
        let _this = this;
        return new Promise(function(resolve, reject) {
            _this.getData(params, function(results){
                resolve(results);
            });
        });
    }

    getAll() {
        let _this = this;
        return new Promise(function(resolve, reject) {
            _this.getAllData(function(results){
                resolve(results);
            });
        });
    }

    add(params) {
        let _this = this;
        return new Promise(function(resolve, reject) {
            _this.addRow(params, function(results){
                resolve(results);
            });
        });
    }
}

module.exports = Sheetsu;
