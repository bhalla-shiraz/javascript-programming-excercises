const subString = (parentString, stringUnderTest) => {
   let i = 0

   while(i < parentString.length) {
      if(parentString[i] === stringUnderTest[0] && stringUnderTest === parentString.slice(i, i + stringUnderTest.length)) {
         return i
      } else {
         i++
      }
   }
   return -1
}



console.log(subString('loopabababcdefgefhtp', 'ab'))
