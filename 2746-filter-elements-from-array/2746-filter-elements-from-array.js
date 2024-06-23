/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArr = [];

    for ( let j = 0; j < arr.length; j++) {
        if ( fn( arr[j], j)) {
            newArr.push(arr[j])
        }
    }

    return newArr
};