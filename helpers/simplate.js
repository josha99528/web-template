var fs = require('fs');

exports.__express = function(filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        
        var rendered = content.toString()
            .replace('[[sampleVariable]]', options.sampleVariable.toString());
            // .replace('FIND', 'REPLACE') // can add additional FIND/REPLACE
        
        return callback(null, rendered);
  });
};