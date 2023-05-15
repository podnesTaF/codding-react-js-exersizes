var combinationSum = function(candidates, target) {
    const res = []

    const dfs = (i, currSum, nums, slate) => {
        console.log(currSum)
        if(currSum < 0) return
        if(currSum === 0) {
            res.push(slate.slice())
            return
        }

        for(let j = i; j < nums.length; j++) {
            slate.push(candidates[j])
            dfs(j, currSum - candidates[j], nums, slate)
            slate.pop()
        }
    }

    dfs(0, target, candidates, [])

    return res
};