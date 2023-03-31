// series of connected nodes
//random access not feasible
// each node = data value + pointer
// list elements can be inserted/removed without reallocation of whole thing
// linear time complexity
// insertion, deletion, search
// last node point null
// ex: all application of both stack and queue, image viewer



// Linked list class

class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
      this.size = 0
    }
  
    isEmpty() {
      return this.size === 0
    }
  
    getSize() {
      return this.size
    }
    
  }
  
  
  const list = new LinkedList()
  console.log(list.isEmpty())
  console.log(list.getSize())


  
