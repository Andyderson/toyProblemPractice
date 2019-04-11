var numUniqueEmails = function(emails) {
  let set = new Set();

  for (let s of emails) {
    let domain = "@" + s.split("@")[1];
    let noPlus = s.split("+")[0];
    let dotSplit = noPlus.split(".");
    let noDot = "";

    for (let str of dotSplit) {
      noDot += str;
    }
    noDot += domain;
    set.add(noDot);
  }
  return set.size;
};

//Alternate solution

var numUniqueEmails = function(emails) {
  var emailsArray = [];

  for (var i = 0; i < emails.length; i++) {
    var currEmail = emails[i];
    var beforeAt = currEmail.split("@")[0];
    var afterAt = currEmail.split("@")[1];

    var localAddress = beforeAt.split("+")[0];
    var removedPeriod = localAddress.replace(/[.]/gi, "");

    var email = removedPeriod + "@" + afterAt;

    emailsArray.push(email);
  }
  return [...new Set(emailsArray)].length;
};
