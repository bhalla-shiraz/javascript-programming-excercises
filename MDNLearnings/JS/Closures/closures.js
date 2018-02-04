// What is a closure?
// closure is a combination of a function and lexical 
// environment withing which the function was declared.

(function init() {
    const name = 'user'
    function welcome() {
        console.log(`welcome to closures ${name}`)
    }
    welcome()
})()

// in the above set of code 
// init function creates a local variable name and a function 
// also can be called as inner function named welcome
// Following points can be noted here
// 1. welcome is an inner function
// 2. inner functions cannot be accessed outside the outer function
// 3. inner functions can access the variables inside the outer functions
// 4. outer function cannot access stuff inside inner function directly

// welcome() -> welcome is not defined - reference error will be thrown if you uncomment it

// =================

// closures returning functions:
function makeFunc() {
    var name = 'user';
    function welcome() {
        console.log(`welcome to closures ${name}`)
    }
    return welcome;
  }
  
  var myFunc = makeFunc();
  myFunc();

// This code also has the same effect as the previous function
// question is how the value of name is still 'user'
// The reason is that closures maintains the reference to its environment
// so even when makefunc has completed execution, the variable name is still avaialable for use

// Q1 Write a adder to calculate sum with a default initial value

// ES6 way
const adder = (x) => (y) => x + y 

const add3 = adder(3)
const add12 = adder(12)

console.log(add3(5))
console.log(add12(28))



// ES5 way

function adderEs5(x) {
    return function(y) {
        return x + y
    }
}

const add4 = adderEs5(4)
const add22 = adderEs5(22)

console.log(add4(5));
console.log(add22(28));

// =================


// Q2 - write a function that has a private counter, can make multiple counters 
// that can increment, decrement and print value


// ES6
console.log("counter program  ES6 =====");

const createCounter = () => {
    let counter = 0
    const changeByValue = (value) => {
        counter += value
    }
    return {
        increment: () => changeByValue(1),
        decrement: () => changeByValue(-1),
        getValue: () => console.log('value of counter::', counter),
    }
}

const counter1 = createCounter()
const counter2 = createCounter()
counter1.getValue()
counter2.getValue()
counter1.increment()
counter2.decrement()
counter1.increment()
counter1.increment()
counter1.getValue()
counter2.getValue()
