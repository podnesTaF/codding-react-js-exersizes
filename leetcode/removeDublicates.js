var removeDuplicates = function(nums) {
    const unique = []

    let i = 0
    while(i < nums.length) {
        while(i + 1 <= nums.length && nums[i] !== nums[i + 1]) {
            unique.push(nums[i])
            i++
        }
        i++
    }

    return unique
};

console.log(removeDuplicates([1,1,2]))