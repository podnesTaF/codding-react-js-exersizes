const combinationSum3 = (k,n) => {
    const res = []

    const nums = [1,2,3,4,5,6,7,8,9]

    const dfs = (i, currSum, slate) => {
        if(currSum < 0) return
        if(slate.length === k) {
            if(currSum === 0) {
                res.push(slate.slice())
            }
            return
        }

        for(let j = i; j < nums.length; j++) {
            slate.push(nums[j])
            dfs(j + 1, currSum - nums[j], slate)
            slate.pop()
        }
    }

    dfs(0,n, [])

    return res
}