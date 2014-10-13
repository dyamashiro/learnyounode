var http = require('http'),
    bl = require('bl'),
    urls = process.argv.slice(2),
    count = 0,
    results = [];
urls.forEach(function (url, index) {
    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.pipe(bl(function (err, data) {
            if (err) return console.error(err);
            results[index] = data.toString();
            count++;
            if (count === 3) console.log(results.join("\n"));
        }));
    });
});
