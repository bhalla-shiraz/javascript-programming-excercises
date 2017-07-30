const largestSum = (arr) => {
   let biggest = Math.max(arr[0], arr[1])
   let secondBiggest = Math.min(arr[0], arr[1])

   let i = 2
   while(i < arr.length) {
      if(biggest < arr[i]) {
         secondBiggest = biggest
         biggest = arr[i]
      }
      i++
   }

   return biggest + secondBiggest
}

console.log(largestSum([-1,2,4,5,6,10]));
