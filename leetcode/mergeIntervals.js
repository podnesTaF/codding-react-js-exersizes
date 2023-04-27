const merge = (intervals) => {
    intervals.sort((a,b) => a[0] - b[0])
    const res = [intervals[0]]

    for(let interval of intervals) {
        let e1 = res[res.length - 1][1]
        let s2 = interval[0]
        let e2 = interval[1]

        if(e1 >= s2) {
            res[res.length - 1] = Math.max(e1, e2)
        } else {
            res.push(interval)
        }
    }
    return res
}