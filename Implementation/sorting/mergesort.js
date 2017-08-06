function mergeSort(list) {
   if(list.length <= 1) {
      return list[0]
   }
   let firstHalfOfList  = list.slice(0, list.length/2)
   let secondHalfOfList = list.slice(list.length/2, list.length)
   firstHalfOfList = mergeSort(firstHalfOfList)
   secondHalfOfList= mergeSort(secondHalfOfList)
   let x =  merge(firstHalfOfList, secondHalfOfList)
   console.log(x);
   return x
}

function merge(a, b) {
   let listA = []
   let listB = []
   if(typeof a !== 'object') {
      listA.push(a)
   } else {
      listA = a
   }

   if(typeof b !== 'object') {
      listB.push(b)
   } else {
      listB = b
   }
   let i = 0
   let j = 0
   let result = []
   console.log("lister ", listA, listB);
   while(i < listA.length && j < listB.length) {
      console.log("in loop");
      if(listA[i] > listB[j]) {
         result.push(listB[j])
         console.log(result);
         j++
      } else {
         result.push(listA[i])
         console.log(result);
         i++
      }
   }
   while(i < listA.length) {
      result.push(listA[i])
      console.log(result);
      i++
   }

   while(j < listB.length) {
      result.push(listB[j])
      console.log(result);
      j++
   }

   console.log("final ", result);
   return result
}

console.log(mergeSort([50,26,17,18,9,4,6]))
