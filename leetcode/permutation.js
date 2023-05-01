function permute(nums) {
    const res = []
    const visited = new Array(nums.length).fill(false)
    
    function backtrack(currPerm) {
      if (currPerm.length === nums.length) {
        res.push([...currPerm])
        return
      }
  
      for (let i = 0; i < nums.length; i++) {
        if (visited[i]) {
          continue
        }
  
        visited[i] = true
        currPerm.push(nums[i])
        backtrack(currPerm)
        currPerm.pop()
        visited[i] = false
      }
    }
  
    backtrack([])
    return res
  }
  
  const nums = [1, 2, 3]
  console.log(permute(nums)) 