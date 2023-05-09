var evalRPN = function(tokens) {
    const stack = []
    let i = 0
    while(i < tokens.length) {
        if(isNaN(+tokens[i])) {
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(handleOperant(tokens[i], +num1, +num2))
        } else {
            stack.push(+tokens[i])
        }
        i++
    }

    return stack[0]
};

const handleOperant = (strOp, a, b) => {
    if(strOp === '+') {
        return a + b
    }
    if(strOp === '/') {
        return Math.trunc(a / b)
    }

    if(strOp === "*") {
        return a * b
    }

    if(strOp === '-') {
        return a - b
    }
}

console.log(evalRPN( ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))


