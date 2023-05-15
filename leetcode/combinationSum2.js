var combinationSum2 = function(candidates, target) {
    const res = []

    candidates.sort((a,b) => a - b)

    const dfs = (idx, currSum, slate) => {
        if(currSum < 0) return
        if(currSum === 0) {
            res.push(slate.slice())
            return
        }

        for(let i = idx; i< candidates.length; i++) {
            if(i !== idx && candidates[i] === candidates[i - 1]) continue
            slate.push(candidates[i])
            dfs(i + 1, currSum - candidates[i], slate)
            slate.pop()
        }
    }

    dfs(0, target, [])

    return res
};