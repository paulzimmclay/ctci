const oneAway = (str1, str2) => {
    longerCount = str1.length > str2.length ? str1.length : str2.length
    matchCount = 0
    for (letter in str1) {
        if (str2.includes(str1[letter])) {
            matchCount++
        }
    }
    return longerCount - 1 === matchCount ? true : false
}

console.log(oneAway("aaa","aaaa"))