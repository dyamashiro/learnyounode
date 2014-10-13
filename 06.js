var mymodule = require('./mymodule'),
    dir = process.argv[2],
    ext = process.argv[3];
mymodule(dir, ext, function (err, data) {
    if (err) return console.error(err);
    data.forEach(function (file) {
        console.log(file);
    });
});
