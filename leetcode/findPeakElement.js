const findPeakElement = (nums) => {
    if(nums.length === 1) return 0
    if(nums[0] > nums[1]) return 0
    if(nums[nums.length - 1] > nums[nums.length - 2])  return nums.length - 1

    let left = 0
    let right = nums.length - 1

    while(left < right) {
        let mid = Math.floor((left + right) / 2)
        
        if(nums[mid] > nums[mid + 1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }   

    return left
}


console.log(findPeakElement([1,2,1,3,5,6,4]))