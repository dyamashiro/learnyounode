var http = require('http'),
    bl = require('bl'),
    url = process.argv[2];
http.get(url, function (response) {
    response.setEncoding('utf8');
    response.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});
