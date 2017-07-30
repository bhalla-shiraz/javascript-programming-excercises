const isPrime = (num) => {
   let divisor = 2
   while(divisor < num) {
      if(num % divisor === 0) {
         return false
      } else {
         divisor++
      }
   }
   return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(8))
