/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new newNode();
};

var newNode = function() {
  this.next = new Array(26);
  this.word = null;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  var current = this.root;

  for (var i = 0; i < word.length; i++) {
    if (!current.next[word[i].charCodeAt(0) - 97]) {
      current.next[word[i].charCodeAt(0) - 97] = new newNode();
    }
    current = current.next[word[i].charCodeAt(0) - 97];
  }
  current.word = word;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  var current = this.root;

  for (var i = 0; i < word.length; i++) {
    if (!current.next[word[i].charCodeAt(0) - 97]) {
      return false;
    }
    current = current.next[word[i].charCodeAt(0) - 97];
  }

  if (current.word === word) {
    return true;
  }
  return false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  var current = this.root;

  for (var i = 0; i < prefix.length; i++) {
    if (!current.next[prefix[i].charCodeAt(0) - 97]) {
      return false;
    }
    current = current.next[prefix[i].charCodeAt(0) - 97];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
