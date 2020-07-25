const parseCookies = (req, res, next) => {
  if (req.headers.cookie === undefined) {
    req.cookies = {};
  } else if ((req.headers.cookie).indexOf(';') === -1) {
    var cookieArr = req.headers.cookie.split('=');
    req.cookies[cookieArr[0]] = cookieArr[1];
  } else {
    var allCookies = req.headers.cookie.split('; ');
    for (var i = 0; i < allCookies.length; i++) {
      var cookieArr = allCookies[i].split('=');
      req.cookies[cookieArr[0]] = cookieArr[1];
    }
  }
  next();
};

module.exports = parseCookies;