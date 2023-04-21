const arrayValuesEqual = (arr1, arr2) => {
    for(let i = 0; i < arr1.length; i++) if(arr1[i] !== arr2[i]) return false

    return true
}

const findAnagrams = (s, p) => {
    const sArr = new Array(26).fill(0)
    const pArr = new Array(26).fill(0)
    const result = []

    for(let i = 0; i < p.length; i++) {
        let index = p.chatCodeAt(i) % 26
        pArr[index]++
    }
    for(let i = 0; i < s.length; i++) {
        let index = s.chatCodeAt(i) % 26
        sArr[index]++

        if(i < p.length - 1) {
            let headIdx = s.chatCodeAt(i - p.length) % 26
            sArr[headIdx]--
        }

        if(i >= p.length - 1) {
            if(arrayValuesEqual(sArr, pArr)) result.push(i - (p.length - 1))
        }
    }

    return result
}

