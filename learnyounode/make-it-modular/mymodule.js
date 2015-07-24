var fs = require ('fs');
var path = require ('path');

var array = [];

module.exports = function (dirName, filter, callback) {
    fs.readdir(dirName, function (err, list) {
        if (err)
            return callback (err);
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) == '.' + filter) {
                array[i] = list[i];
            }
        }
        callback (null, array);
    })
}
