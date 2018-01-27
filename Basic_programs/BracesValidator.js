var isValid = function(s) {
    const map = {
      '(': ')',
      '{': '}',
      '[': ']',
    }
    const stack = []
    let valid = true
    for(let i = 0; i < s.length; i++) {
      const item = s[i]
      if(map.hasOwnProperty(item)) {
         stack.push(item)
      } else {
         let top = stack.pop()
         if(map[top] !== item) {
            valid = false
            break
         }
      }
    }
    return valid
};

console.log(isValid(['{', '}']))
console.log(isValid(['{', '[', '}', ']']))
