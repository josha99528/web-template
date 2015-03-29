var fs = require('fs');

exports.__express = function(filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        
        var rendered = content.toString();
        
        if (options.findReplace) {
            for (var name in options.findReplace) {
                rendered = rendered.replace('[[' + name + ']]', options.findReplace[name]);
            }
        }
        
        return callback(null, rendered);
  });
};