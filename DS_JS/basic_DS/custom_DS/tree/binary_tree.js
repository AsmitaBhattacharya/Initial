// each node has atmost 2 children(left child, right child)
//


// detele can be happen 3 ways:
// delete leaf node

class Node {
    constructor(value) {
      this.value = value
      
      this.left = null
      this.right = null
    }
  }
  
  
  class BinarySearchTree {
    constructor() {
      this.root = null
    }
    isEmpty() {
      return this.root === null
    }
    insert(value) {
      const newNode = new Node(value)
      if(this.isEmpty()) {
        this.root = newNode
      } else {
        this.insertNode(this.root, newNode)
      }
    }
  
    insertNode(root, newNode) {
      if(newNode.value < root.value) {
        if(root.left === null) {
          root.left = newNode
        } else {
          this.insertNode(root.left, newNode)
        }
      } else {
        if(root.right === null) {
          root.right = newNode
        } else {
          this.insertNode(root.right, newNode)
        }
      }
    }
  
    search(root, value) {
      if(!root) {
        return false
      } else {
        if(root.value === value) {
          return true
        } else if(value < root.value) {
          return this.search(root.left, value)
        } else {
          return this.search(root.right, value)
        }
      }
    }
  
    // DFS: preorder traversal
    preOrder(root){
      if(root) {
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
      }
    }
  
    // DFS: inorder traversal
    inOrder(root){
      if(root) {
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
      }
    }
  
    // DFS: postorder traversal
    postOrder(root){
      if(root) {
        this.inOrder(root.left)
        this.inOrder(root.right)
        console.log(root.value)
      }
    }
  
    // BFS
    levelOrder() {
      // use the optimised queue implementation
      const queue = []
      queue.push(this.root)
      while(queue.length) {
        let curr = queue.shift() 
        console.log(curr.value)
        if(curr.left) {
          queue.push(curr.left)
        }
        if(curr.right) {
          queue.push(curr.right)
        }
      }
    }
  
    min(root){
      if(!root.left){
        return root.value
      } else {
        return this.min(root.left)
      }
    }
  
    max(root){
      if(!root.right){
        return root.value
      } else {
        return this.max(root.right)
      }
    }
  
    
  }
  
  
  const bst = new BinarySearchTree()
  console.log('Tree is empty? ', bst.isEmpty())
  
  bst.insert(10)
  bst.insert(5)
  bst.insert(7)
  bst.insert(20)
  bst.insert(3)
  bst.insert(2)
  
  console.log(bst.search(bst.root, 20))
  console.log(bst.search(bst.root, 40))
  console.log(bst.search(bst.root, 2))
  bst.preOrder(bst.root)
  bst.inOrder(bst.root)
  bst.postOrder(bst.root)
  bst.levelOrder(bst.root)
  
  console.log('max', bst.max(bst.root))
  console.log('min', bst.min(bst.root))