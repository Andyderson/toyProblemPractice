function formatQs(query) {
  var output = {};
  // 	var qs = document.location.search.substring(1);
  var qs = "a=1&b=2";
  qs = qs.split("&");

  for (var i = 0; i < qs.length; i++) {
    var tokens = qs[i].split("=");
    output[tokens[0].toLowerCase()] = tokens[1];
  }

  return output;
}

formatQs();
