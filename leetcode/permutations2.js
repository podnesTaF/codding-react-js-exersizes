const permutation = (nums) => {
    const res = []

   const dfs = (i, nums) => {
    if(i === nums.length) {
        res.push(nums.slice())
        return 
    }


    const hash = {}

    for(let j = i; j < nums.length; j++) {
        if(hash[nums[j]]) continue
        hash[nums[j]] = true
        let temp1 = nums[i];
        nums[i] = nums[j];
        nums[j] = temp1;
        dfs(i + 1, nums)
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
   }

   dfs(0, nums)

   return res
}

console.log(permutation([1,1,2]))