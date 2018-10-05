// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

// [-2, 0, -3]

// Using 1 Stack
// Initialize data structure
var MinStack = function() {
  this.MinStack = [];
  this.minValue = Number.MAX_SAFE_INTEGER;
};

MinStack.prototype.push = function(x) {
  if (x < this.minValue) {
    this.MinStack.push([x, this.minValue]);
    this.minValue = x;
  } else {
    this.MinStack.push([x, this.minValue]);
  }
};

MinStack.prototype.pop = function() {
  this.minValue = this.MinStack[this.MinStack.length - 1][1];
  return this.MinStack.pop();
};

MinStack.prototype.top = function() {
  return this.MinStack[this.MinStack.length - 1][0];
};

MinStack.prototype.getMin = function() {
  return this.minValue;
};

// Using 2 Stacks
// Initialize data structure
var MinStack = function() {
  this.MinStack = []; // stores min and each push
  this.stack = []; // stores min at each push
};

MinStack.prototype.push = function(x) {
  if (x <= this.stack[this.stack.length - 1] || this.stack.length === 0) {
    this.stack.push(x);
  } else {
    this.MinStack.push(x);
  }
};

// if pop is on a min number then need to pop from both stacks
MinStack.prototype.pop = function() {
  if (
    this.MinStack[this.MinStack.length - 1] ===
    this.stack[this.stack.length - 1]
  ) {
    this.stack.pop();
  }
  return this.MinStack.pop();
};

MinStack.prototype.top = function() {
  return this.MinStack[this.MinStack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
