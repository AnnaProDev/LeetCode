/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = [];

    for ( let j = 0; j < arr.length; j++ ) {
       let newItem = fn(arr[j], j);
       newArr.push(newItem)
    }

    return newArr;
};