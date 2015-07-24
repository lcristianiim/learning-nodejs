var fs = require ('fs');
var path = require ('path');

var array = [];

module.exports = function (dirName, filter, callback) {
    fs.readdir(dirName, function (err, list) {
        if (err)
            return callback (err);
        array = list.filter(function(item){
            if (path.extname(item) == '.' + filter) {
                return item;
            }
        })
        callback (null, array);
    })
}
