const request = require('request')
module.exports = (done, url) => {
  console.log(url)
  request(url, function (err, response, body) {
    if (err) throw err;
    done(body);
  });
}
