QUnit.test('Binary Search Trees', function(assert){
  let bst = new BST();
  assert.ok(bst, 'new BST created');
  assert.equal(bst.root, null, 'newly created bst is empty');

  bst.push(10);
  assert.equal(bst.root.value, 10, 'value pushed correctly, root is 10');

  bst.push(7);
  assert.ok(bst.root.left, 'left node correctly pushes');
  assert.equal(bst.root.left.value, 7, 'root\'s left is correct');

  bst.push(13);
  assert.ok(bst.root.right, 'right node correctly pushes');
  assert.equal(bst.root.right.value, 13, 'root\'s right is correct');
})