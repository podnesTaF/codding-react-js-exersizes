var searchInsert = function(nums, target) {
    if(nums[nums.length - 1] < target) return nums.length
    if(nums[0] >= target) return 0

    let middle = Math.floor(nums.length - 1 / 2) 
    let left = 0
    let right = nums.length - 1
    let closest = middle;

    while(left < right) {
        if(nums[middle] > target) {
            right = middle - 1
            middle = Math.floor(right / 2)
            closest = right
        } else if(nums[middle] < target) {
            left = middle + 1
            middle = Math.floor((left + right) / 2)
            closest = left
        } else {
            return middle
        }
    }

    return closest
};

console.log(searchInsert([1,3,5], 4))