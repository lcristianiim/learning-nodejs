var fs = require('fs');
var path = require('path');
var dirName = process.argv[2];
var filter = "." + process.argv[3];

fs.readdir(dirName, function callback(err, list){
    for (var i = 0; i < list.length; i++) {
         if (path.extname(list[i]) == filter) {
             console.log (list[i]);
         }
    }
});
