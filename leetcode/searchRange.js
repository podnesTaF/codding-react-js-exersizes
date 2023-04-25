const searchRange = (nums, target) => {
    const newArr = []
    let targetIdx = nums.findIndex(n => n === target)
    while(nums[targetIdx] === target) {
        newArr.push(targetIdx)
        targetIdx++
    }

    if(newArr.length === 0) {
        return [-1,-1]
    }
    
    return [newArr[0], newArr[newArr.length - 1]]
    
};

console.log(searchRange([5,7,7,8,8,10], 2))