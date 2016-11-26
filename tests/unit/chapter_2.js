/* global chapter2 */

QUnit.test('lambdas', function(assert) {
  assert.equal(chapter2.sum([5, 5, 5]), 15, 'result should be 15');
});

QUnit.test('Method context', function(assert) {
  let filter1 = {
    highpass: chapter2.highPass,
    cutoff: 5
  };
  let filter2 = {
    // no highPass here
    cutoff: 3
  };

  let result1 = filter1.highpass(3);
  assert.equal(result1, false, '3 >= filter1.cutoff should be false');

  let result2 = chapter2.highPass.call(filter2, 3);
  assert.equal(result2, true, '3 >= filter2.cutoff should be true');

  let result3 = filter1.highpass(6);
  assert.equal(result3, true, '6 >= filter1.cutoff should be true');
});

QUnit.test('function declaration hoisting', function(assert) {
  /**
   * javascript builds its execution environment in two passes.
   * The first pass is declaration pass.
   * The declaration pass sets up the runtime env, where it scans for all variable and function declarations and creates the identifiers.
   * The second pass is execution pass.
   * After the first pass, all declared functions are available, but variables are still undefined, untill the line defining / giving them value is hit.
   */

  function number() {
    return 1;
  }

  (function() {
    // function number gets hoisted in iffe's scope being a function declaration and is thus available before hitting the definition.
    assert.equal(number(), 2, 'inner scope wins');

    function number() {
      return 2;
    }
  }());

  // outer scopes number is available here.
  assert.equal(number(), 1, 'outer scope still works!');
});

QUnit.test('Function expression hoisting', function(assert) {
  /**
   * Function Expressions do not share this behaviour, because they do not declare a function.
   * Instead, they declare a variable and are subject to the same variable behaviour.
   */
  function number() {
    return 1;
  }

  (function() {
    try {
      number();
    } catch(e) {
      assert.ok(true, 'number() is undefined');
    }
    // here number is a function expression assigned to a variable, not a function declaration.
    // thus subject to variable hoisting behaviour.
    let number = function number() {
      return 2;
    };

    assert.equal(number(), 2, 'number() is defined now');
  }());

  assert.equal(number(), 1, 'outer scope still works');
});

QUnit.test('Closure for object privacy', function(assert) {
  let obj = chapter2.closure();
  try {
    assert.ok(data, 'variable not availble outside closure'); // eslint-disable-line
  } catch(e) {
    assert.ok(true, 'the data variable is only available to privlidged methods');
  }

  assert.equal(obj.get(), 1, '.get() privledged method should have access to data');
});

(function() {
  let arr = [];
  let count = 1;
  let delay = 20;
  let timer, complete;

  timer = function timer() {
    setTimeout(function inner() {
      arr.push(count);

      if (count < 3) {
        count += 1;
        timer();
      } else {
        complete();
      }
    }, delay);
  };

  QUnit.test('closure with setTimeout.', function(assert) {
    let done = assert.async();

    complete = function complete() {
      assert.equal(arr.join(','), '1,2,3', 'arr should be [1,2,3]');

      done();
    };

    timer();

    // timer(), being async in nature, would get pushed to a new figurative call-stack that would only execute when this one finsishes.
    // thus when code hits this line, the array should be empty as the async stuff hasn't happened yet.
    assert.equal(arr.length, 0, 'arr should be zero untill first timeout');
  });

}());