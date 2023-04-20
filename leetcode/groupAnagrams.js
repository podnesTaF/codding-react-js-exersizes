const groupAnagrams = (strs) => {
    const hash = {}
    for(let i = 0; i < strs.length; i++) {
        const hashed = strs[i].split('').sort().join('')
        if(hash[hashed]) {
            hash[hashed].push(strs[i])
        } else {
            hash[hashed] = [strs[i]]
        }
    }

    return Object.values(hash)
}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))