// JS implementation of Stack

//create a class using function definition
function Stack () {
   this.top = -1
   this.list= []
}

Stack.prototype.push = function(data) {
   this.top++
   this.list[this.top] = data
}

let stackobj = new Stack()
stackobj.push(20)

const StackES6 = () => ({
   this.top = -2
   this.list = []
})

const StackES6.prototype.push = (data) => ({
   this.top++
   this.list[this.top] = data
   console.log(this);
})

let obj = new StackES6()
obj.push(120)
