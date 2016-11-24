let { test } = QUnit;

test('lambdas', function(assert) {
  assert.equal(chapter2.sum([5, 5, 5]), 15, 'result should be 15');
});