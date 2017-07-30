// range from 1 to 10
// solution is to calculate sum and then subtract from sum of 1 to 10

const missingNumber = (arr) => {
   const sumForRange = (10 * (10 - 1)) / 2
   const sumOfArray = arr.reduce((result, item) => result + item)
   return sumForRange - sumOfArray
}

console.log(missingNumber([7,2,6,4,9,8,1,3]));
