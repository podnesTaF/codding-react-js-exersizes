var findMin = function(nums) {
    const old = [...nums]
    const sorted = nums.sort((a,b) => a-b)

    const isEqual = () => {
        return sorted[sorted.length -1] === old[old.length - 1] && sorted[0] === old[0]
    }

    let count = 0

    while(!isEqual()) {
        let first = old.shift()
        old.push(first)
        count++
    }

    return count
};


console.log(findMin([2,3,5,1]))