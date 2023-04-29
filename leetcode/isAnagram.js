var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let dict = {}
    for(let i = 0; i < s.length; i++) {
        if(dict[s[i]]) {
            dict[s[i]] += 1
        } else {
            dict[s[i]] = 1;
        }
    }

    for(let i = 0; i< t.length; i++) {
        if(!dict[t[i]]) {
            return false;
        } else {
            dict[t[i]] -= 1
        }
    }

    console.log(dict)

    return dict
    
};


console.log(isAnagram('anagram', 'nagaram'))
