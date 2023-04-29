var isPowerOfThree = function(n) {
    if(n === 1) return true
    let num = 3
    while(num <= n) {
        console.log(num)
        if(num === n) return true

        num *= 3
    }

    return false
};

console.log(isPowerOfThree(27))