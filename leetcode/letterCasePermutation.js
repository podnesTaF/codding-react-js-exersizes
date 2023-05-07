var letterCasePermutation = function(s) {
    const res = []

    const dfs = (i, s, slate) => {
        if(i === s.length) {
            res.push(slate.join())
            return
        }

        let char = s[i]
        if(!Number.isInteger(parseInt(char))) {
            slate.push(char.toUpperCase())
            dfs(i + 1, s, slate)
            slate.pop()

            slate.push(char.toLowerCase())
            dfs(i + 1, s, slate)
            slate.pop()
        } else {
            slate.push(char)
            dfs(i + 1, s, slate)
            slate.pop()
        }
    }

    dfs(0, s, [])
    return res
};