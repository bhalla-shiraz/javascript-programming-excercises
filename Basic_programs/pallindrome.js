const isPallindrome = (str) => {
    try {
        str = str.toString()
    }
    catch(err) {
        return false
    }
    return str === str.split('').reverse().join('')
}

console.log(isPallindrome('javascripttpircsavaj'));
console.log(isPallindrome('javasj'));
console.log(isPallindrome(12344321));
console.log(isPallindrome(true))
