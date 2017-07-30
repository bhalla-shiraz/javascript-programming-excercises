const removeDuplicateCharacters = (str) => {
   let charMap = {}
   let result = []
   for(i in str.split('')) {
      if(!charMap.hasOwnProperty(str[i])) {
         charMap[str[i]] = 1
         result.push(str[i])
      }
   }
   return result.join('')
}

console.log(removeDuplicateCharacters('mississippi'));
