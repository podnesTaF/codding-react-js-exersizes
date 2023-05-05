const maxVowels = (s, k) => {
    let max = 0

    const vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};

    let start = 0;
    let end = k - 1;
    let curr = 0;

    for (let i = 0; i <= end; i++) {
        if (vowels[s[i]]) curr++;
    }
    max = curr;


    while (end < s.length - 1) {
        if (vowels[s[start++]]) curr--;
        if (vowels[s[++end]]) curr++;
        max = Math.max(max, curr);
    }

    return max
}

console.log(maxVowels('aeiou', 2))