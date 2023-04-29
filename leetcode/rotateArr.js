var rotate = function(nums, k) {
    for(let i = nums.length - 1; i >= nums.length - k; i--) {
        console.log(i)
        let popped = nums.pop()
        nums.unshift(popped)
    }

    console.log(nums)
};

rotate([-1,-100,3,99], 2)