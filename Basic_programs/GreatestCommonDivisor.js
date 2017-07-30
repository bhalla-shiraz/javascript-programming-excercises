const gcd = (num1, num2) => {
   let greatestCommonDivisor = 1
   if(num1 < 2 || num2 <2) {
      return 1
   }

   let minOfTheTwo = Math.min(num1, num2)
   for(let divisor = 1; divisor < minOfTheTwo; divisor++) {
      if(num1 % divisor === 0 && num2 % divisor === 0) {
         greatestCommonDivisor = divisor
      }
   }

   return greatestCommonDivisor
}

console.log(gcd(12,20));

// recursive way
const gcdRecursive = (num1, num2) => {
   if(num2 === 0) {
      return num1
   }
   console.log(num1, num2);
   return gcdRecursive(num2, num1 % num2)
}

console.log(gcdRecursive(20, 12));
