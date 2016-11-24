const chapter2 = (function chapter2() {

  /**
   * @private
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

  return {
    sum
  };
})();
