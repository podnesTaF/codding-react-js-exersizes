var canJump = function(nums) {
    if(nums.length === 1) return true
    let curr = 0
   
    let goal = nums.length - 1
    while(curr < goal) {
        let next = nums[curr] + curr;
        if(next >= goal) return true // can reach the end
        let maxJump = 0
        let nextIndex = 0
        for(let i = curr + 1; i <= next; i++) {
            if(i + nums[i] > maxJump) {
                maxJump = i + nums[i]
                nextIndex = i
            }
        }
        if(maxJump === 0) return false // cannot make progress
        curr = nextIndex
    }
    return true
};

console.log(canJump([3,2,1,0,4]))