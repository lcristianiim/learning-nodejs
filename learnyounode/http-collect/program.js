var http = require('http'),
    bl = require('bl'),
    myString = '';

http.get(process.argv[2], function (response){
    response.pipe(bl(function (err, data){
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})

// solution without additional module
    // response.setEncoding('utf8')
    // response.on('data', function (data){
    //     myString += data;
    // })
    // response.on('end', function (data){
    //     console.log(myString.length)
    //     console.log(myString);
    // })
// solution with bl module
