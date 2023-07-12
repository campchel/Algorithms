/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
    constructor(data) {
        this.data = data;
        this.left = null; // a BSTNode with a smaller value
        this.right = null; 
    }
}

    /**
     * Represents an ordered tree of nodes where 
     * the data of left nodes are <= to their parent and
     * the data of right nodes are > their parent's data.
     */
    class BinarySearchTree {
        constructor() {
        this.root = null;
        }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        const newNode = new BSTNode(newVal);

    if (!this.root) {
      // Tree is empty, set the new node as the root.
        this.root = newNode;
        return this;
    }

    let curr = this.root;

    while (true) {
        if (newVal < curr.data) {
        // Go to the left subtree.
        if (!curr.left) {
          // Found an empty spot for the new node.
            curr.left = newNode;
            break;
        }
        // Move to the left child and continue searching.
        curr = curr.left;
        } else {
        // Go to the right subtree.
        if (!curr.right) {
          // Found an empty spot for the new node.
            curr.right = newNode;
            break;
        }
        // Move to the right child and continue searching.
        curr = curr.right;
        }
    }

    return this;
}
    }
    
    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root); {
        if (!this.root) {
            // Tree is empty, set the new node as the root.
            this.root = new BSTNode(newVal);
            return this;
        }
        if (!curr) {
            // Found an empty spot for the new node.
            return new BSTNode(newVal);
        }
        if (newVal < curr.data) {
            // Go to the left subtree.
            curr.left = this.insertRecursive(newVal, curr.left);
        } else {
            // Go to the right subtree.
            curr.right = this.insertRecursive(newVal, curr.right);
        }
        return this;
    }
    print(node = this.root, spaceCnt = 0, spaceIncr = 10); {
        if (!node) {
        return;
        }

    spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }


const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
  // oneNodeTree.print()

/* twoLevelTree
          root
          10
        /   \
      5     15
  */
const twoLevelTree = new BinarySearchTree();
twoLevelTree.insert(10)
twoLevelTree.insert(5)
twoLevelTree.insert(15);
  // twoLevelTree.print()

  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   8  13  20
  */
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(8);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print()
