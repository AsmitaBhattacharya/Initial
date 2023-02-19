// size fixed
// FIFO
// ex: clock, streaming data, traffic light

// enqueue(element) - add element
// dequeue() - remove top elemeent
// peek() - get top element without removing
// isFull()
// isEmpty()
// size()
// print()


class CircularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.capacity = capacity
      this.currentLength = 0
      this.rear = -1;
      this.front = -1;
    }
  
    isFull() {
      return this.currentLength === this.capacity
    }
  
    isEmpty() {
      return this.currentLength === 0
    }
  
    enqueue(element) {
      if(!this.isFull()) {
        // this.rear = this.rear + 1 // edge case: if 0 index is empty and max capacity is 4 then after 4 is will go to 5 but it should go to 0 index
        this.rear = (this.rear + 1) % this.capacity
        this.items[this.rear] = element
        this.currentLength += 1
        if(this.front === -1) {
          this.front = this.rear
        }
        
      }
    } 
  
    dequeue() {
      if(this.isEmpty()) {
        return null
      }
      const item = this.items[this.front]
      this.items[this.front] = null
      this.front = (this.front + 1) % this.capacity
      this.currentLength -= 1
      if(this.isEmpty()) {
        this.front = -1
        this.rear = -1
      }
      return item
    }
  
    peek() {
      if(!this.isEmpty()) {
        return this.items[this.front]
      } else {
        return null;
      }
    }
  
    size() {
      return this.rear - this.front
    }
  
    print() {
    if(this.isEmpty()) {
        console.log('Queue is empty')
      } else {
        let i
        let str = ''
        for (i = this.front; i != this.rear; i = (i+1) % this.capacity) {
          str += this.items[i] + " "
        }
        str += this.items[i]
        console.log(str)
      }
          
    }
    
  }
  
  
  const circularQueue = new CircularQueue(5)
  console.log(circularQueue.isEmpty())
  
  circularQueue.enqueue(10)
  circularQueue.enqueue(20)
  circularQueue.enqueue(30)
  circularQueue.enqueue(100)
  console.log(circularQueue.size())
  
  circularQueue.print()
  
  console.log(circularQueue.dequeue())
  console.log(circularQueue.peek())
  circularQueue.enqueue(90)
  circularQueue.print()
  
  
  
  
  