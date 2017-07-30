const sumOfTwo = (arr, target) => {
   const mapper = {}
   for( i in arr ) {
      if(mapper.hasOwnProperty(target - arr[i])) {
         return [ arr[i], target - arr[i] ]
      } else {
         mapper[arr[i]] = 1
      }
   }

}

console.log(sumOfTwo([2,3,4,7], 9))
