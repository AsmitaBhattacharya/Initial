// LIFO
// push, pop

// ex: browser back, undo, expression conversions, call stack in JS


// push(element) - add element
// pop() - remove top elemeent
// peak() - get top element without removing
// isEmpty()
// size()
// print()

// array is used for random i/o operations whereas stack is for LIFO principle. Insertion/removal for stack is always constant time complexity


class Stack {
    constructor() {
      this.item = [];
    }
  
    push(element) {
      this.item.push(element);
    }
  
    pop() {
      return this.item.pop();
    }
  
    peak() {
      return this.item[this.item.length - 1]
    }
  
    isEmpty() {
      return this.item.length === 0
    }
  
    size() {
      return this.item.length
    }
  
    print() {
      console.log(this.item.toString())
    }
  }
  
  
  const stack = new Stack()
  console.log(stack.isEmpty())
  
  stack.push(20)
  stack.push(40)
  stack.push(100)
  console.log(stack.size())
  stack.print()
  
  console.log(stack.pop())
  console.log(stack.peak())