// inplace way
const RemoveDuplicates = (arr, num) => {
   let i = 0
   while(i < arr.length) {
      if(arr[i] === num) {
         arr.splice(i, 1)
      } else {
         i++
      }
   }
   return arr
}

console.log(RemoveDuplicates([1,2,1,1,2,3,4,5,6,1], 1));

// new array
const RemoveDuplicatesNewArray = (arr, num) => {
   let resultArray = []
   for(i in arr) {
      if(arr[i] !== num) {
         resultArray.push(arr[i])
      }
   }
   return resultArray
}

console.log(RemoveDuplicatesNewArray([1,2,1,1,2,3,4,5,6,1], 1));
