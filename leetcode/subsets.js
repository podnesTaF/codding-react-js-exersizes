const subsets = (nums) => {
    const sets = []

    const dfs = (i, nums, slate) => {
        if(i === nums.length) {
            sets.push(slate.slice())
            return
        }

        dfs(i+1, nums, slate)

        slate.push(nums[i])
        dfs(i + 1, nums, slate)
        slate.pop()
    }

    dfs(0, nums, [])

    return sets
}

const arr = [1,2,4,5]

const a = [1,2]

console.log(arr.join('').includes(arr.join('')))