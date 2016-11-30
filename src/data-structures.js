/**
 * A constructor for a node element of a binary search tree.
 *
 * @param {any} val
 */
function NodeEl(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

/**
 * A constructor for a binary search tree.
 */
function BST() {
  this.root = null;
}

/**
 * Implementation of push function to add elements to the binary search tree.
 * All elements to the left of root are less than root.
 * All elements to the right of root are greater than root.
 *
 * @param {any} val
 * @returns {Object}
 */
BST.prototype.push = function(val) {
  let { root } = this;

  if (!root) {
    this.root = new NodeEl(val);
    return;
  }
  let currentNode = root;
  /**
   * Recursively traverses the tree and adds the element being pushed at the correct place accounting for BST logic.
   * Could simply have used a while loop,a good exercise in recursive thinking.
   *
   */
  function traverse() {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = new NodeEl(val);
        return;
      } else {
        currentNode = currentNode.left;
        traverse();
      }
    }
    if (val > currentNode.value) {
      if (!currentNode.right) {
        currentNode.right = new NodeEl(val);
        return;
      } else {
        currentNode = currentNode.right;
        traverse();
      }
    }
  }
  traverse();

  return currentNode;
};

/**
 * Implementation of max function in a BST, returns the max value for the tree.
 *
 * @returns {any} Max value for the BST, or 0 if empty.
 */
BST.prototype.max = function() {
  let { root } = this;
  if (!root) {
    return 0;
  }
  let current = root;
  (function max() {
    if (current.right) {
      current = current.right;
      max();
    }
  })();

  return current.value;
};

/**
 * Implementation of min function in a BST, returns the max value for the tree.
 *
 * @returns {any} min value for the BST, or 0 if empty.
 */
BST.prototype.min = function() {
  let { root } = this;
  if (!root) {
    return 0;
  }
  let current = root;
  (function min() {
    if (current.left) {
      current = current.left;
      min();
    }
  })();

  return current.value;
};