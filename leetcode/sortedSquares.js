const sortedSquares = (nums) => {
   let i = 0
   let curr = nums.length - 1;
   let j = nums.length - 1;
   let res = new Array(nums.length)

   while(i <= j) {
        let left = nums[i]**2
        let right = nums[j]**2

        if(left > right) {
            res[curr] = left;
            i++
        } else {
            res[curr] = right;
            j--
        }
        curr--
   }
   return res
}