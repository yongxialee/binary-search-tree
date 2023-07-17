class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // if(!this.root) return 0
    let node = new Node(val);
    //if there isn't root, set node to be the root
    if(this.root===null) {
      this.root=node;
    }
    let prev = null;
    let temp = this.root;
    while(temp!=null){
      if(temp.val>val){
        prev=temp;
        temp=temp.left;
      }else if(temp.val<val){
        prev =temp;
        temp=temp.right;
      }
    }
    if(prev.val>val) prev.left=node;
    else prev.right=node;
    }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

   insertRecursively(val, current = this.root) {
    // If the tree is empty, insert at the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);
    } else {
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curNode= this.root;
    if(val===curNode.val){
      return curNode;
    }
    while (curNode){
      if(val<curNode.val){
        curNode=curNode.left;
      }else if(val>curNode){
        curNode=curNode.right;
      }else{
        return curNode.val===val;
      }
    }
    

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val,current=this.root) {
    if(!current) return undefined;
    if(val<current.val){
      if(current.left ===null) return undefined;
      return this.findRecursively(val,current.left)
      
    }else if(val>current.val){
      if(current.right===null) return undefined;
      return this.findRecursively(val,current.right);
    }

    return current;


  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data= [];
    let current =data.this;
    function traverse(node){
      data.push(node.val); 
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current=this.root;
    function traverse(node){
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data =[];
    let current= this.root;
    function traverse(node){
      node.left&& traverse(node.left);
      node.right&& traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
