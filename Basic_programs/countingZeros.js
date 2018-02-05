const countingZeros = (num) => {
   let count = 0
   while(num >= 10) {
    if(num%10 === 0)
        count += 1
    num = Math.floor(num/10)
   }
   return count
}

console.log(countingZeros(1030400));
