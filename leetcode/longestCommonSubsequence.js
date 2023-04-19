const longestCommonSubsequence = (text1, text2) => {
    const table = Array.from({length: text1.length + 1}, () => new Array(text2.length + 1).fill(''))

    for(let i = 1; i < table.length; i++) {
        for(let j = 1; j < table[i].length; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                table[i][j] = table[i - 1][j-1] + text1[i - 1]
            } else {
                let aboveChar = table[i - 1][j]
                let leftChat = table[i][j - 1]
                table[i][j] = aboveChar.length > leftChat.length ? aboveChar : leftChat
            }
        }
    }

    return table[table.length - 1][table[0].length - 1].length
}