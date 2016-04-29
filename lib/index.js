'use strict';
const request = require('request-promise');
require('nodeify').extend(request);

class Sheetsu {
    constructor(url) {
        this.url = url;
    }

    getAll(callback) {
        let get_url = this.url;
        let request_params = {
            url : get_url,
            method: 'GET',
            json: true
        };
        return request(request_params)
                .then(function(body) {
                    if(body.status === 200 && body.success === true) {
                        let results = {
                            meta: {
                                code: 200
                            },
                            data: body.result
                        };
                        return results;
                    }
                    else {
                        return {
                            meta: {
                                code: body.status
                            },
                            data: []
                        };
                    }
                })
                .catch(function(err){
                    throw err;
                })
                .nodeify(callback);
    }

    get(params, callback) {
        let get_url = this.url + '/column/:column_name';
        let request_params = {
            url : get_url.replace(':column_name', params.column_name),
            method: 'GET',
            json: true
        };
        return request(request_params)
                .then(function(body) {
                    if(body.status === 200 && body.success === true) {
                        let results = {
                            meta: {
                                code: 200
                            },
                            data: body.result
                        };
                        return results;
                    }
                    else {
                        return {
                            meta: {
                                code: body.status
                            },
                            data: []
                        };
                    }
                })
                .catch(function(err){
                    throw err;
                })
                .nodeify(callback);
    }

    add(params, callback) {
        let request_params = {
            url : this.url,
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        };
        return request(request_params)
                .then(function(body) {
                    if(body.status === 201 && body.success === true) {
                        let results = {
                            meta: {
                                code: 201
                            },
                            data: body.result
                        };
                        return results;
                    }
                    else {
                        return {
                            meta: {
                                code: body.status
                            },
                            data: []
                        };
                    }
                })
                .catch(function(err){
                    throw err;
                })
                .nodeify(callback);
    }
}

module.exports = Sheetsu;
