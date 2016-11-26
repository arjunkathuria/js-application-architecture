const chapter2 = (function chapter2() { // eslint-disable-line

  /**
   * Lambdas
   *
   * A function to showcase a lambda.
   * A lambda is a function that is used as data. In this case the .addTo() function passed into .forEach() is a lambda.
   *
   * @param {Array} arr input array of numbers
   * @returns {Number} Sum of all the numbers in arr
   */
  let sum = function sum(arr) {
    let result = 0;
    arr.forEach(function addTo(number) {
      result += number;
    });
    return result;
  };

  /**
   * Method Context
   *
   * @param {Number} number
   * @param {Number} cutoff
   * @returns {Boolean}
   */
  function highPass(number, cutoff) {
    cutoff = cutoff || this.cutoff;
    return (number >= cutoff);
  }

  /**
   * Closures
   *
   * In a nutshell, A closure stores function state, even after its returned.
   * To create a closure, simply define a fn inside a fn and then expose it.
   * To expose a fn, return in or pass it to another fn. The inner fn will have access to vars declared in the outer fn.
   * This technique is commonly used to give objects data privacy.
   *
   * This function is an Object Factory, exposes the `get` function which has access to the inner data variable.
   * It should thus, be able to access it. Also called a privledged method or fn.
   *
   * @returns {Object}
   */
  function closure() {
    let data = 1;
    let get;

    get = function() {
      return data;
    };

    return {
      get
    };
  }

  /**
   * Function Polymorphism
   *
   * Polymorphic functions behave differently based on the parameters you pass into them.
   * Ploymorphic functions often need to examine the first argument in order oto decide how to respond
   * you could call Array.slice on the `arguments`{Array-like but not array} object and then args.shift() to get the first argument.
   *
   * @param {any} options
   * @returns {string}
   */
  function morph(options) {
    let args = [].slice.call(arguments, 0);
    let animals = 'turtles'; // set a default

    if (typeof options === 'string') {
      animals = options;
      args.shift();
    }

    return `The pet Store has ${args} ${animals}.`;
  }

  /**
   * Method dispatch
   *
   * Dynamic dispatch enables Polymorphism by selecting the appropriate method to run based-
   * -on the parameters that get passed into the method at runtime.
   * @returns
   */
  let greet = (function() {
    let methods = {
      init: function init(args) {
        return 'initializing...';
      },
      hello: function hello(args) {
        return `Hello ${args}`;
      },
      goodbye: function goodbye(args) {
        return `Goodbye, cruel ${args}`;
      }
    };
    return function greet(options) {
      let args = [].slice.call(arguments, 0);
      let action = 'init'; // init will run by default

      if (typeof options === 'string' && typeof methods[options] === 'function') {
        action = options;
        args.shift();
      }

      return methods[action](args);
    };
  }());

  return {
    sum,
    highPass,
    closure,
    morph,
    greet
  };

})();
