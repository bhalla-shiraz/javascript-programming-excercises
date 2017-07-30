const FirstNonRepeatingCharacter = (str) => {
   let charMap = {}
   let repeated = ''
   for(i in str.split('')) {
      if(str[i] == ' ') continue
      if(charMap.hasOwnProperty(str[i])) {
         repeated = str[i]
         break
      } else {
         charMap[str[i]] = 1
      }
   }
   return repeated
}

console.log(FirstNonRepeatingCharacter('quick brown focks'));
