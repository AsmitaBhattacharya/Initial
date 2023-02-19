// FIFO
// ex: people waiting in line
// enqueue : insert in rear of the queue
// dequeue: remove from front
// ex: printer, CPU task schedule, callback queue in JS

// enqueue(element) - add element
// dequeue() - remove top elemeent
// peek() - get top element without removing
// isEmpty()
// size()
// print()

// array is used for random i/o operations whereas stack is for LIFO principle. Insertion/removal for stack is always constant time complexity


// 1st approach with linear time complexity


class QueueA {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element)
    } 
  
    dequeue() {
      return this.items.shift()
    }
  
    isEmpty() {
      return this.items.length === 0
    }
  
    peek( ){
      if(!this.isEmpty()) {
        return this.items[0]
      }
      return null
    }
  
    size() {
      return this.items.length
    }
  
    print() {
      console.log(this.items.toString())
    }
    
  }
  
  
  const queuea = new QueueA()
  console.log(queuea.isEmpty())
  
  queuea.enqueue(10)
  queuea.enqueue(20)
  queuea.enqueue(30)
  queuea.enqueue(100)
  console.log(queuea.size())
  
  queuea.print()
  
  console.log(queuea.dequeue())
  console.log(queuea.peek())
  
  
  
  
// second approach with constant time complexity

class QueueB {
    constructor() {
      this.items = {};
      this.rear = 0;
      this.front = 0;
    }
  
    enqueue(element) {
      this.items[this.rear] = element
      this.rear ++
    } 
  
    dequeue() {
      const item = this.items[this.front]
      delete this.items[this.front]
      this.front++
      return item
    }
  
    isEmpty() {
      return this.rear - this.front === 0
    }
  
    peek() {
      return this.items[this.front]
    }
  
    size() {
      return this.rear - this.front
    }
  
    print() {
      console.log(this.items)
    }
    
  }
  
  
  const queueb = new Queue()
  console.log(queueb.isEmpty())
  
  queueb.enqueue(10)
  queueb.enqueue(20)
  queueb.enqueue(30)
  queueb.enqueue(100)
  console.log(queueb.size())
  
  queueb.print()
  
  console.log(queueb.dequeue())
  console.log(queueb.peek())

