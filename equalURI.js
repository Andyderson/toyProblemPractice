const equalURI = function(uri1, uri2) {
  uri1 = decodeURI(uri1);
  uri2 = decodeURI(uri2);

  var splitURI1 = uri1.split("/");
  var splitURI2 = uri2.split("/");

  if (splitURI1.length !== splitURI2.length) {
    return false;
  }

  for (var i = 0; i < splitURI1.length; i++) {
    if (i === 0 && splitURI1[i].toLowerCase() !== splitURI2[i].toLowerCase()) {
      return false;
    } else if (i === 2) {
      var host1 = splitURI1[i].includes(":80")
        ? splitURI1[i].replace(":80", "")
        : splitURI1[i];
      var host2 = splitURI2[i].includes(":80")
        ? splitURI2[i].replace(":80", "")
        : splitURI2[i];
      if (host1.toLowerCase() !== host2.toLowerCase()) {
        return false;
      }
    } else if (splitURI1[i] !== splitURI2[i]) {
      return false;
    }
  }
  return true;
};

equalURI(
  "http://abc.com:80/~smith/home.html",
  "http://ABC.com/%7Esmith/home.html"
);
