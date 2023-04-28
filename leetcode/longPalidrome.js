var isPalindrome = function(s) {
    let replaced = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log(replaced)
    let swapped = ''
    for(let i = replaced.length - 1; i >= 0; i--) {
        swapped += replaced[i]
    }
    console.log(replaced)
    console.log(swapped)
    return swapped === replaced
};

isPalindrome("0P")