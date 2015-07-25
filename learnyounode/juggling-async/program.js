// Designed to work with 3 argv
var http = require('http'),
    bl = require('bl'),
    link0 = process.argv[2],
    link1 = process.argv[3],
    link2 = process.argv[4],
    myArray = [];

http.get(link0, function(response){
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        myArray[0] = data.toString()
    }))
})
http.get(link1, function(response){
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        myArray[1] = data.toString()
    }))
})
http.get(link2, function(response){
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        myArray[2] = data.toString()
    }))
})

checkArray(myArray);

function checkArray (myArray) {
    var full = true;
    if (myArray[0] == undefined || myArray[1] == undefined || myArray[2] == undefined) {
        full = false;
    } else {
        console.log(myArray[0])
        console.log(myArray[1])
        console.log(myArray[2])
        full = true;
    }
    if (full == false) {
        setTimeout(function() { checkArray(myArray) }, 2000);
    }
}
