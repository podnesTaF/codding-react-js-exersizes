const findDifference = (nums1, nums2) => {
    const arr = Array.from({length: 2}, () => new Array())

    for(let i = 0; i < nums1.length; i++) {
        if(!nums2.includes(nums1[i]) && !arr[0].includes(nums1[i])) {
            arr[0].push(nums1[i])
        }
    }
    for(let i = 0; i < nums2.length; i++) {
        if(!nums1.includes(nums2[i]) && !arr[1].includes(nums2[i])) {
            arr[1].push(nums2[i])
        }
    }

    return arr
}

console.log(findDifference([1,2,3,3], [1,1,2,2]))