var subsetsWithDup = function(nums) {
    const sets = []

    nums.sort((a,b) => a-b)

    const dfs = (i, nums, slate) => {
        if(i === nums.length) {
            sets.push(slate.slice())
            return
        }

        dfs(i + 1, nums, slate)

        slate.push(nums[i])
        dfs(i + 1, nums, slate)
        slate.pop()
    }

    dfs(0, nums, [])

    const hash = {}
    for(let set of sets) {
        if(hash[set]) {
            continue
        } else {
            hash[set] = set
        }
    }

    return Object.values(hash)
};

console.log(subsetsWithDup([1,2,2]))