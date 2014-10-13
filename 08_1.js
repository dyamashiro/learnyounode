var http = require('http'),
    url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding('utf8');
    var result = '';
    response.on('data', function (data) {
        result += data;
    });
    response.on('error', console.error);
    response.on('end', function () {
        console.log(result.length);
        console.log(result);
    });
});
