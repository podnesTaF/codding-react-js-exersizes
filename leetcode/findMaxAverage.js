const findMaxAverage = (nums, k) => {
    let maxSum = -Infinity
    let soFar = 0
    let s = 0

    for(let e = 0; e < nums.length; e++) {
        soFar += nums[e];
        if(e - s === k-1) {
            let avg = soFar/k
            maxSum = Math.max(maxSum, avg)
            soFar -= nums[s]
            s++
        }
    }

    return maxSum
}