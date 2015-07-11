var fs = require('fs');
var filePath = process.argv[2];
var getFile;
var number = undefined;

function readLines (filePath, callback) {
    fs.readFile (filePath, 'utf8', function (err, data) {
        if (err) throw err;
        lines = data.split(/\r?\n/);
        number = lines.length - 1;
        callback();
    })
}
function display() {
    console.log(number);
}
readLines(filePath, display);

// official version
// var fs = require ('fs');
// var file = process.argv[2];
//
// fs.readFile(file, function (err, contents){
//     var lines = contents.toString().split('\n').length - 1;
//     console.log(lines);
// })
