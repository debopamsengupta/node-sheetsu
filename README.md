# node-sheetsu  [![Downloads](https://img.shields.io/npm/dt/sheetsu.svg)](https://www.npmjs.com/package/sheetsu)
Node JS module for using Sheetsu

## Getting Started
* Install the module ```npm install sheetsu```
* Example usage :
```javascript
var Sheetsu = require('sheetsu');

var test_url = 'YOUR_SHEETSU_API';

var dev = new Sheetsu(test_url);

dev.getData({column_name:'...'}, function(response) {
    console.log(response.data);
});
dev.addRow({...}, function(response) {
    console.log(response);
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
