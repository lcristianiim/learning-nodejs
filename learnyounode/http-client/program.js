var http = require ('http'),
    link = process.argv[2];

var me = http.get(link, function (response){
    response.setEncoding('utf8')
    response.on('data', function (data) {
        console.log (data);
    })
    response.on('error', console.error)
})
