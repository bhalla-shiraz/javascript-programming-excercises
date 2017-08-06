// http://adripofjavascript.com/blog/drips/invoking-javascript-functions-with-call-and-apply.html

function isTwoPassed(){
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}

console.log(isTwoPassed(1,4)) //false
console.log(isTwoPassed(5,3,1,2)) //true

// ///////////// /// //// // // //

const add = (item1, item2) => {
   console.log(item1 + item2);
}

add.call(this, 1,2)
add.apply(this, [1,2, 3])
