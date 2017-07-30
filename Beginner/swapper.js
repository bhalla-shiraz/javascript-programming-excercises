// without using temp variable
const swap1 = (num1, num2) => {
   num2 = num2 - num1
   num1 = num2 + num1
   num2 = num1 - num2
   return {
      num1,
      num2
   }
}

console.log(swap1(3,5));
