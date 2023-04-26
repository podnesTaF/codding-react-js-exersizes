var addDigits = function(num) {
    let digitArr = num.toString().split('')
    let res = Infinity;
    while(res > 9) {
        res = digitArr.reduce((acc, curr) => acc + +curr,0)
        digitArr = res.toString().split('')
    }

    return res
};