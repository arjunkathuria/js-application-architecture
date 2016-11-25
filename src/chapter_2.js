const chapter2 = (function chapter2() {

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

  return {
    sum,
    highPass
  };
})();
