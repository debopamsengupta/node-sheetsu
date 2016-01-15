# node-sheetsu  [![Downloads](https://img.shields.io/npm/dt/sheetsu.svg)](https://www.npmjs.com/package/sheetsu)
Node JS module for using Sheetsu

## What's new (v1.1.0)
* Supports Promises now. Use the ```get``` , ```getAll``` and ```add``` methods to use yield-ables.

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

### getAllData (callback)
* ```callback``` : function to be executed after the method

### getData (params, callback)
* ```params``` : Should include the field ```column_name``` to get data of the particular column
* ```callback``` : function to be executed after the method

### addRow (params, callback)
* ```params``` : Should include the row of information to add to the spreadsheet
* ```callback``` : function to be executed after the method

### getAll ()

### get (params)
* ```params``` : Should include the field ```column_name``` to get data of the particular column

### add (params)
* ```params``` : Should include the row of information to add to the spreadsheet
