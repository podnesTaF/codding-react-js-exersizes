var productExceptSelf = function(nums) {
    const res = []


    let currRes = nums.reduce((acc, curr, i) => i !== 0 ? acc * curr : acc,1)
    res.push(currRes)
    let prev = 0
    for(let curr = 1; curr < nums.length; curr++) {
        if(nums[curr] === 0) {
            currRes = nums.reduce((acc, next, i) => curr !== i ? acc * next : acc,1)
        } else {
            currRes = currRes / nums[curr] * nums[prev]
        }

        console.log(currRes)
        res.push(currRes)
        prev++;
    }

    return res
};

console.log(productExceptSelf([0,2,3,4]))