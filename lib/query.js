'use strict';
const _ = require('lodash');
class Query {
    static handleParams(params) {
        let new_params = {
            url: params.url,
            qs: params.qs || {}
        };
        if (params.fields){
            new_params.qs.fields = params.fields;
        }

        if (params.column && params.value) {
            new_params.url += `${params.column}/${params.value}`;
        }

        return new_params;
    }
}
