var findDuplicates = function(nums) {
    const duplicates = []
    const dict = {}

    for(let i = 0; i < nums.length; i++) {
        if(dict[nums[i]] === 1) {
            duplicates.push(nums[i])
            dict[nums[i]] += 1
        } else {
            dict[nums[i]] = 1
        }
    }

    return duplicates
};


console.log(findDuplicates([4,3,2,7,8,2,3,1]))