// not working yet
const permutations = (str) => {
   arr = str.split('')
   let results = []
   let i = 0
   let perms = []
   let next
   if(arr.len === 0) {
      return [arr]
   }
   while(i < arr.length) {
      let rest = [...arr]
      let picked = rest.splice(i, 1)
      console.log(rest);
      restPerms = permutations(rest.join(''))
      i++
      console.log("restPerms", restPerms);
      for(let j = 0; j < restPerms.length; j++) {
         console.log("next", next);
         next = picked.concat(restPerms[j])
         console.log("next", next);
         perms.push(next.join(''))
      }
   }
   return perms
}

console.log(permutations('abc'));
