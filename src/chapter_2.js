const chapter2 = (function chapter2() { // eslint-disable-line

  /**
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

  return {
    sum,
    highPass,
    closure
  };

})();
