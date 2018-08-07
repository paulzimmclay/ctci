const sorter = (str) => str.split('').sort().join('')

const reverser = (str) => str.split('').reverse().join('')

const pPC = (str1, str2) => {
    console.log
    if (str1 === reverser(str1) && str2 === reverser(str2)) {
        if (sorter(str1) === sorter(str2)) {
            return true
        } 
    }
    return false
}

console.log(pPC('aba', 'aba'))