const fs = require('fs');
module.exports = (done, filename) => {
  fs.readFile('./'+filename, (err, data) => {
    if (err) throw err;
    done(data);
  });
}
