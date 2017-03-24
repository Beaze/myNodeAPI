/**
 * Created by yuanyuan on 2017/3/24.
 */
var fs = require('fs');

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
  // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
  var bitmap = new Buffer(base64str, 'base64');
  // write buffer to file
  fs.writeFileSync(file, bitmap);
  console.log('******** File created from base64 encoded string ********');
}

exports.Decode = base64_decode;