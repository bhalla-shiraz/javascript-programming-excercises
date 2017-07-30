const reverseWords = (sentence) => {
   return sentence.split(' ').reverse().join(' ')
}

console.log(reverseWords('Hi This is Shiraz'));


// as a prototype
String.prototype.reverseWords = function() {
   return this.split(' ').reverse().join(' ')
}

console.log('Hi This is JS'.reverseWords())
