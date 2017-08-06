(function() {
	console.log(bar, 'is undefined as hoisting causes just declaration but not initialization')
	//console.log(baz) // error: baz is not defined
	foo()
	//function declaration AND its body is hoisted
	function foo() {
		console.log('aloha');
	}
	//variable declaration is hoisted but value assignment stays here
	var bar = 1;
	baz = 2; //defines baz in global scope
   console.log(baz, 'baz is now declared, that too in global scope');
   var baz = 14
   // let baz = 14
   // let allows you to declare variables that are limited in scope to the block,
   // statement, or expression on which it is used. This is unlike the var keyword,
   // which defines a variable globally, or locally to an entire function
   // regardless of block scope. An explanation of why the name "let" was
   // chosen can be found here.
   console.log(baz, 'baz is now declared in local scope');
})();

// diff b/w var/function/function* declarations and let/const/class declara­tions
// is the initialisation. The former are initialised with undefined
// or the (generator) function right when the binding is created at the top of the scope.
// The lexically declared variables however stay uninitialised.
// This means that a ReferenceError exception is thrown when you
// try to access it. It will only get initialised
// when the let/const/class statement is evaluated,
// everything before (above) that is called the temporal dead zone.


//hence if in above code if you change var to let - it'll give reference error
