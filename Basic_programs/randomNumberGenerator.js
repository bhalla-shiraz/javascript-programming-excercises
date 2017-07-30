const randomNumberGenerator1to5 = () => {
   return parseInt(1 + Math.random() * 4)
}

const randomNumberGenerator1to7 = () => {
   return parseInt(5 + randomNumberGenerator1to5() / 5 * 2)
}

console.log(randomNumberGenerator1to5());
console.log(randomNumberGenerator1to7());
