# node-sheetsu [![Build Status](https://travis-ci.org/debopamsengupta/node-sheetsu.svg?branch=master)](https://travis-ci.org/debopamsengupta/node-sheetsu) [![Downloads](https://img.shields.io/npm/dt/sheetsu.svg)](https://www.npmjs.com/package/sheetsu)
Node JS module for using Sheetsu

## What's new (v1.2.0)
* Supports Promises & callbacks . Use the ```get``` , ```getAll``` and ```add``` methods to use both Promises and callbacks.

## Getting Started
* Install the module ```npm install sheetsu```
* Example usage :
```javascript
var Sheetsu = require('sheetsu');
var co = require('co');
var test_url = 'YOUR_SHEETSU_API';

var dev = new Sheetsu(test_url);

dev.addRow({...}, function(response) {
    console.log(response);
});

co(function* () {
    let result = yield dev.getAll();
    console.log(result);
})
```

## Methods

### getAll ([callback])
* ```callback (optional)``` : function to be executed after the method

### get (params, [callback])
* ```params``` : Should include the field ```column_name``` to get data of the particular column
* ```callback (optional)``` : function to be executed after the method

### add (params, [callback])
* ```params``` : Should include the row of information to add to the spreadsheet
* ```callback (optional)``` : function to be executed after the method
