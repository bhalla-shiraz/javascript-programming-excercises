// edit:  The definition of a prime number is a positive integer that has exactly two positive divisors. 
// However, 1 only has one positive divisor (1 itself), so it is not prime.

const isPrime = (num) => {
   if(num === 1) return false
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
