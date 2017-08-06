
class StackES6Class {
   constructor() {
      this.top = -1
      this.list= []
   }

   push(data) {
      this.list[++this.top] = data
      console.log(this);
   }

   pop() {
      console.log(this.list[this.top])
      this.top--
   }
}

let StackES6ClassObj = new StackES6Class()
StackES6ClassObj.push(100)
StackES6ClassObj.pop()
