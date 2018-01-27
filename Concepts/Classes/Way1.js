/*
 * Using a function
 * most common way of creating a class
 * create a function and then objects using new keyword 
 */
function Fruit(type) {
    this.type = type
    this.name = 'Apple'
    this.color = 'Red'
    this.getFruitName = getFruitName
}

/* This is an antipattern
* Why?
* as a class defined like this as a constructor can have many functions
* if we define the function out of the class we'll end up declaring all of them in global space
* this can have naming conflicts
*/
function getFruitName() {
    console.log(this.name);
    
}

let apl = new Fruit('sweet')
apl.getFruitName()

// we can also update a value using :
apl.name = 'Peach'
apl.getFruitName()


/*
 * In order to take care of the anti pattern 
 * we can define the functions in constructor itself 
 */

function Fruit2(type) {
    this.type = type
    this.name = 'AppleOverripe'
    this.color = 'Red'
    var count = 0
    this.getFruitName = function() {
        console.log(this.name);
        
    }
}
let fruitObj = new Fruit2('overripe')
fruitObj.getFruitName()


/*
 * Drawback of using above function inside the constructor is that  this function is created again for 
 * every object created from this constructor
 * Solution: Add the common function to prototype
 */

 Fruit2.prototype.getType = function() {
     console.log("type: ", this.type);   
 }

 const fruitProtoObj = new Fruit2('testType')
 fruitProtoObj.getType()


/*
 * Experiment - what happens to the variable in prototype object 
 * if variable is true private variable it can be accessed only inside the constructor
 */

 Fruit2.prototype.updateCount = function() {
    this.count = this.count + 1
 }

 Fruit2.prototype.getCount = function() {
    console.log(this.count)
 }

 const f1 = new Fruit2()
 const f2 = new Fruit2()
 const f3 = new Fruit2()
 const f4 = new Fruit2()

 f1.updateCount()
 f2.updateCount()
 f3.updateCount()
 f4.updateCount()

 f4.getCount()


/*
 * Defining updateCount inside the constructor 
 */

 function Counter() {
     let count = 0
     this.updateCounter = function() {
         count++
     }
     this.displayCount = function() {
         console.log(count);
         
     }
 }

 const c = new Counter()
 c.updateCounter()
 c.updateCounter()
 c.updateCounter()
 c.displayCount()




