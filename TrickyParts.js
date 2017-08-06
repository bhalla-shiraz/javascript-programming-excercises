const QUESTION1 = 'Null vs undefined'
const SOL1 = 'undefined means, value of the variable is not defined. JavaScript has a global variable undefined whose value is undefined and \
               typeof undefined is also undefined.\
               8 Ways to get Undefined\
               A declared variable without assigning any value to it.\
               Implicit returns of functions due to missing return statements.\
               return statements that do not explicitly return anything.\
               Lookups of non-existent properties in an object.\
               Function parameters that have not passed\
               Anything that has been set to the value of undefined.\
               Any expression in the form of void(expression)\
               The value of the global variable undefined"'


const SOL1_PART2 = 'null means empty or non-existent value which is used by \
               programmers to indicate “no value”. null is a primitive \
               value and you can assign null to any variable. null is not \
               an object, it is a primitive value. \
               For example, you cannot add properties to it. \
               Sometimes people wrongly assume that it is an object, \
               because typeof null returns "object".\
               Btw, null == undefined ref: history of typeof null'

const QUESTION2 = '== vs ==='
const SOL2 = 'The simplest way of saying that, \
               == will not check types and === will check whether \
               both sides are of same type. So, == is tolerant. But \
               under the hood it converts to its convenient type to have \
               both in same type and then do the comparison.\
               === compares the types and values. Hence, if both\
               sides are not same type, answer is always false. For example, \
               if you are comparing two strings, they must have identical \
               character sets. For other primitives (number, boolean) must share\
                the same value.'
const SOL2_PART2 = 'If both operands are same type use ===\
                   undefined == null If one operands is string another is \
                   number, convert string to number \
                   If one is boolean and another is non-boolean, convert boolean to number\
While comparing a string or number to an object, try to convert the object to a primitive type'

// for objects:
var a = {a: 1};
var b = {a: 1};
a == b //false
a === b //false

var c = a;
a == c//true
a === c //true

// Question: Is 'false' is false?
//
// Answer: No. Because, it's a string with length greater than 0. Only empty string is false.
//
// Question: Is ' ' is false?
//
// Answer: No. Because, it's not an empty string. There is a white space in it.
//
// Question: What about {}?
//
// Answer: true. It's an object. An object without any property is an object can't be falsy.
//
// Question: Tell me about []?
//
// Answer: This is also truthy. It's an array object (array is child of object) is truthy.
//
// Question: You talked bout '' to be falsy. What about new String('')?
//
// Answer: Though you are passing empty string to the string constructor, it is creating an String object. More precisely a instance of String object. It becomes an object. Hence, it is not false. so, it is truthy.
//
// Question: Tell me about new Boolean(false)
//
// Answer: truthy. As it creates an instance of the Boolean object which is an object. Object is truthy.
//
// Question: Boolean(function(){})
//
// Answer: true if you pass a truthy value to Boolean, it will be true.
//
// Question: Boolean(/foo/)
//
// Answer: true
//
// Question: true%1
//
// Answer: 0. When you are trying to find reminder of true, true becomes 1 and reminder of 1 while dividing by 1 is 0. you will get same result if you doe false%1
//
// Question: ''%1
//
// Answer: 0

let abra = []
if(abra) {
   console.log("will be printed");
}

if(abra === true) {
   console.log("will not be printed");
}


// extend date prototype

Date.prototype.nextDay = function(){
  var currentDate = this.getDate();
  return new Date(this.setDate(currentDate +1));
}

var date = new Date();
console.log(date)
console.log(date.nextDay())
