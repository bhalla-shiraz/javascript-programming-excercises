// Not only should you know the mechanics of what a closure is, you should know why
// it matters, and be able to easily answer several possible use-cases for closures.

// Closures are frequently used in JavaScript for object data privacy, in event
// handlers and callback functions, and in partial applications, currying, and
// other functional programming patterns.


// DEFINITION 1:
// A closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state (the lexical environment).

// DEFINITION 2:
// a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at
// function creation time.

// very basic
// this example explains how closures work

//In JavaScript, closures are created every time a function is created, at function creation time.
const test2 = (function () {
   console.log('2');
   return 1
})()

// here, as we are creating a function that returns are value from closure
// it wont get executed at creation time
const test = () => (function () {
   console.log('i');
})()

//In JavaScript, closures are the primary mechanism used to enable data privacy.
// When you use closures for data privacy, the enclosed variables are only in scope
// within the containing (outer) function. You can’t get at the data from an outside
// scope except through the object’s privileged methods. In JavaScript, any exposed
// method defined within the closure scope is privileged.


//Example to show that a closure can access variables that are in upper scope.
let message = "Winter is comming"
function getMessage(){
  (function() {
     console.log(message)
  })()
}
getMessage()



// most asked interview question - event handler
// var nodes = document.getElementsByTagName('button');
// for (var i = 0; i < nodes.length; i++) {
//    nodes[i].addEventListener('click', function() {
//       console.log('You clicked element #' + i);
//    });
// }

// problem here is after the for loop is completed, the
// variable i assumes a value equal to the length of the nodes list.
// In addition, because i was in scope at the time the code attached the handler,
// the variable belongs to handler’s closure.

// Solution:
// var nodes = document.getElementsByTagName('button');
// for (var i = 0; i < nodes.length; i++) {
//    nodes[i].addEventListener('click', (function(i) {
//       return function() {
//          console.log('You clicked element #' + i);
//       }
//    })(i));
// }

// another solution is to move the function outside the loop
// function handlerWrapper(i) {
//    return function() {
//       console.log('You clicked element #' + i);
//    }
// }
//
// var nodes = document.getElementsByTagName('button');
// for (var i = 0; i < nodes.length; i++) {
//    nodes[i].addEventListener('click', handlerWrapper(i));
// }
console.log("next");
// when to use  var or let - always, else it goes to a global scope
(function() {
   baz = 5;
   var bar = 10;
})();

console.log(baz); // outputs 5
//console.log(bar); // error: bar is not defined

console.log("Increment operator that doesn't allow count to change");
// increment using closrues
const increment = (function(index) {
   let count = 0
   return function() {
      count++
      console.log(count);
   }
})()
increment()
increment()
increment()
increment()
increment()

console.log("easy way for incrementer");
// ES 6
const increaser = () => {
   let count = 0
   return () => {
      count++
      console.log(count)
   }
}

let inc = increaser()
inc()
inc()
inc()
inc()


console.log("next\n\n");
// addition with defined default variable
(function() {
	function sumSetDefault(x) {
		return function (y) {
		console.log(x + y);
		}
	}
let sum = sumSetDefault(2)
sum(1)
})();
