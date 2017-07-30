const merge = (arr1, arr2) => {

   if(!arr1) return arr2
   if(!arr2) return arr1

   let resultArray = []
   let i = 0
   let j = 0
   while(i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
         resultArray.push(arr1[i])
         i++
      } else {
         resultArray.push(arr2[j])
         j++
      }
   }
   while(i < arr1.length) {
      resultArray.push(arr1[i])
      i++
   }

   while(j < arr2.length) {
      resultArray.push(arr2[j])
      j++
   }

   return resultArray
}

console.log(merge([1,4,6,8,9], [2,5,6,10]));
