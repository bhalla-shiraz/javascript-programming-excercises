// http://adripofjavascript.com/blog/drips/invoking-javascript-functions-with-call-and-apply.html

function isTwoPassed(){
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}
console.log(isTwoPassed(1,4)) //false
console.log(isTwoPassed(5,3,1,2)) //true


/**
 * Question is how is this happening under the hood?
 * .slice() is called normally, this is an Array, and then it just iterates over that Array, and does its work.
 * Now how is this an array?
 * when we do object.method(), this automatically makes object as this
 * The argument object though looks like object is enough to be treated as array in this
 * 
 * For example
 * 
 */

// This looks like an object with keys similar to array
// when we use this as 'this' we can apply array methods
var my_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  length: 5
};

// slice from index 2 to length -1 
var sliced = Array.prototype.slice.call( my_object, 2, my_object.length - 1 );
console.log(sliced)

// slice to separate items
console.log(Array.prototype.slice.call( my_object ));


///////////////

const add = (item1, item2) => {
   console.log(item1 + item2);
}

add.call(this, 1,2)
add.apply(this, [1,2, 3])
