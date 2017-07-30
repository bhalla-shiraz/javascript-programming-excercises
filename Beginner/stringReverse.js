// using inbuilt functions
const stringReverseInbuilt = (str) => {
   return str.split('').reverse().join('')
}

console.log(stringReverseInbuilt('javascript coder'));

// string reversal normal
const stringReverseNormal = (str) => {
   let result = ''
   for(let i = str.length -1; i > 0; i--) {
      result += str[i]
   }
   return result
}

console.log(stringReverseNormal('Coders are cool'));

// string reversal using array
// as concatenation is a time taking task
const stringReversalArrayBased = (str) => {
   let arr = []
   for(let i = 0; i < str.length; i++) {
      arr.unshift(str[i])
   }

   return arr.join('')
}

console.log(stringReversalArrayBased('js is cool'));

// as string extension
String.prototype.stringRev = function(){
   return this.split('').reverse().join('')
}

console.log('React is Cool'.stringRev());
