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
