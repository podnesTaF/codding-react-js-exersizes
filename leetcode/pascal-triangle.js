const pascalTriangle = (numRows) => {
    const arr = []
    for(let i = 1; i <= numRows; i++) {
        arr.push(new Array(i))
        arr[i - 1][0] = 1
        arr[i - 1][i - 1] = 1
    }

    for(let i = 0; i < numRows; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(!arr[i][j]) {
                arr[i][j] = arr[i - 1][j - 1] + arr[i-1][j]
            }
        }
    }

    return arr
}

console.log(pascalTriangle(9))