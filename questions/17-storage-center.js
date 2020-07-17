// Write a class called storage center that has three methods set, has, and get
// set should accept a node and a value and store it the data store
// has should check if the node exists within your data store
// get should retrieve the value associated with the node that was stored

class Node {
  constructor(node) {
    this.node = node
  }
}

class StorageCenter {
  constructor() {
    this.list = []
  }

  set(node, val) {
    const newNode = new Node({ node: value });

    this.list.push(newNode);
  }

  has(node) {
=    return this.list.some(obj => Object.keys(obj)[0] === node);
  }

  get(node) {
    if (this.has(node)) {
      return this.list.filter(obj => Object.keys(obj)[0] === node)[0];
    }
  }
}
