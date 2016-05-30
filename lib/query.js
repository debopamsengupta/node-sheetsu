'use strict';

class Query {
    static handleParams(params) {
        let new_params = {};
        if (params.fields){
            if (!new_params.qs) {
                new_params.qs = {};
            }
            new_params.qs.fields = params.fields;
        }

        if (params.column && params.value) {
            new_params.url += `${params.column}/${params.value}`;
        }

        return new_params;
    }
}
