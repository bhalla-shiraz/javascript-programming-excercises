const isPrime = (num) => {
   if(num % 2 === 0 && num !== 2) {
      return false
   }
   let divisor = 3
   while(divisor < num) {
      if(num % divisor === 0) {
         return false
      } else {
         divisor += 2
      }
   }
   return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(8))
