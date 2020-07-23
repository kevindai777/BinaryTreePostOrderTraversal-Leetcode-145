//Objective is to do a postorder traversal over a binary tree, using a bfs
//and a dfs traversal

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)


//O(n) dfs traversal solution
if (!tree.root) {
    return []
}

let result = []
function dfs(node) {
    if (!node) {
        return
    }

    dfs(node.left)
    dfs(node.right)
    result.push(node.val)
}
dfs(tree.root)

return result


//O(n) bfs traversal solution
if (!root) {
    return []
}
let result = []
let stack = [root]

while (stack.length > 0) {
    let curr = stack.pop()
    result.unshift(curr.val)
    
    if (curr.left) {
        stack.push(curr.left)
    }
    if (curr.right) {
        stack.push(curr.right)
    }
}
return result