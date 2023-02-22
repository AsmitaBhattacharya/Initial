// also known as hash map
// store key value pairs; act as lookup
// object class has own keys which can be conflicted 
// use for fast lookup
// arrays have numeric index; to go to string index we use hashing(converts the string key into hash code, return numeric index)
// ex: db indexing, caches

// set to store key-value
// retrieve a value with given key
// delete key-value
// convert string key to numeric index


class HashTable {
    constructor(size) {
      this.table = new Array(size)
      this.size = size
    }
    hash(key) { // convert string key to numeric key
      let total = 0
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
      }
      return total % this.size
    }
  
    set(key, value) {
      const index = this.hash(key)
      this.table[index] = value
    }
  
    get(key) {
      const index = this.hash(key) 
      return this.table[index]
    }
  
    remove(key) {
      const index = this.hash(key)
      this.table[index] = undefined
    }
  
    display() {
      for(let i = 0; i < this.table.length; i++) {
        if(this.table[i]) {
          console.log(i, this.table[i])
        }
      }
    }
    
  }
  
  
  const table = new HashTable(50)
  table.set("name", "Bruce")
  table.set("age", 25)
  table.display() 
  
  console.log(table.get("name"))
  
  table.remove("name")
  table.display()
  
  // if the index has same length and same letters then it'd have a same index value: collision
  // for that we can lose data
  
  table.set("mane", "Peter") // collision
  table.display()
  
  // store arrays instead of storing 1 key value pair in 1 index
  
  class HashTable {
    constructor(size) {
      this.table = new Array(size)
      this.size = size
    }
    hash(key) { // convert string key to numeric key
      let total = 0
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
      }
      return total % this.size
    }
  
    set(key, value) {
      const index = this.hash(key)
      // this.table[index] = value
      const bucket = this.table[index]
      if(!bucket) {
        this.table[index] = [[key, value]]
      } else {
        const sameKeyItem = bucket.find(item => item[0] === key)
        if(sameKeyItem) {
          sameKeyItem[1] = value
        } else {
          bucket.push([key, value])
        }
      }
    }
  
    get(key) {
      const index = this.hash(key) 
      // return this.table[index]
      const bucket = this.table[index]
      if(bucket) {
        const sameKeyItem = bucket.find(item => item[0] === key)
        if(sameKeyItem) {
          return sameKeyItem[1]
        }
      } else {
        return 'No item found'
      }
    }
  
    remove(key) {
      const index = this.hash(key)
      // this.table[index] = undefined
      const bucket = this.table[index]
      if(bucket) {
        const sameKeyItem = bucket.find(item => item[0] === key)
        if(sameKeyItem) {
          bucket.splice(bucket.indexOf(sameKeyItem), 1)
        }
      }
    }
  
    display() {
      for(let i = 0; i < this.table.length; i++) {
        if(this.table[i]) {
          console.log(i, this.table[i])
        }
      }
    }
    
  }
  
  
//   const table2 = new HashTable(50)
  table.set("name", "Bruce")
  table.set("age", 25)
  table.display() 
  
  console.log(table.get("name"))
  
  table.set("mane", "Peter")
  table.display()
  
  table.remove("name")
  table.display()
  
  
  // always possibility of data loss; 
  // hash table reaches half or more the array capacity get doubled/ rehashed

  // time complexity is linear with hash table
  // we use average case time complexity (which is constant) as the collision gets minimum
  