const nums1 = [1,2,3,0,0,0]

var merge = function(nums1, m, nums2, n) {
    let i = nums1.length - 1
    let f = m - 1
    let s = n - 1

    while(s >= 0 && f >= 0) {
        console.log(nums1)
        if(nums1[f] < nums2[s]) {
            nums1[i] = nums2[s]
            s--
            i--
        } else {
            nums1[i] = nums1[f]
            f--
            i--
        }
    }
};

merge(nums1, 3, [2,4,5], 3)


console.log(nums1)