const isValid = (s) => {
    const stack = [];
    const parens = '[] () {}';
    let i = 0

    while (i < s.length) {
        stack.push(s[i])
        i++

        let open = stack[stack.length - 2]
        let closed = stack[stack.length - 1]

        let potParens = open + closed;
        
        if(parens.includes(potParens)) {
            stack.pop()
            stack.pop()
        }
    }

    return stack.length === 0
}

console.log(isValid('(())'))