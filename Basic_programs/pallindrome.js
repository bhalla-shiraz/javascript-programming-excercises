const isPallindrome = (str) => {
   return str === str.split('').reverse().join('')
}

console.log(isPallindrome('javascripttpircsavaj'));
console.log(isPallindrome('javasj'));
