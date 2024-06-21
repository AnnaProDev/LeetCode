/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let p = init;
    return {
        increment: function() {
            p = p + 1;
            return ( p )
        },
        decrement: function() {
            p = p - 1
            return ( p )
        },
        reset: function() {
            p = init
            return ( p )
        }
     }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */