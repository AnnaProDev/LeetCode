/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
        const grouped = {}
    for(let e of this){
        const key = fn((e))
        grouped[key] ||=[]
        grouped[key].push(e)
    }
    return grouped
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */