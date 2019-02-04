/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
 * Stack Class
 */
var Stack = function() {
  var storage = [];

  // add an item to the top of the stack
  this.push = function(val) {
    storage.push(val);
  };

  // remove an item from the top of the stack
  this.pop = function() {
    return storage.pop();
  };

  // return the number of items in the stack
  this.size = function() {
    return storage.length;
  };
};

/**
 * Queue Class
 */
var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val) {
    inbox.push(val);
  };

  this.dequeue = function() {
    for (var i = 0; i < inbox.size().length; i++) {
      outbox.push(inbox.pop());
    }
    return outbox.pop();
  };

  this.size = function() {
    return inbox.size() + outbox.size();
  };
};
