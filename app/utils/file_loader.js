var fs = require('fs');

export const loadFile = (filename, callback) => {
    fs.readFile(filename, function (err, data) {
        if (err) {
            throw err;
        }
        callback(JSON.parse(data.toString()));
    });
};