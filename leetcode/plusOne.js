var plusOne = function(digits) {
    const len = digits.length
    let lastDigits = [digits[len - 1] + 1]
    if(lastDigits[0] === 10) {
        lastDigits = lastDigits.map(d => d+ '')
        lastDigits = lastDigits[0].split('').map(d => +d)
    }

    console.log(lastDigits)
    digits.pop()

    return [...digits, ...lastDigits]
};


console.log(plusOne([0]))