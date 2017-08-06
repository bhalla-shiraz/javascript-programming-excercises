// Methods to create a class in javascript

// Method 1
// using function

function Student(name) {
   this.name = name
   this.showName = () => {

      return `My name is ${this.name}`
   }
}

let s = new Student('Shiraz')
console.log(s.showName());

Student.prototype.age = 100

//we will over ride the age property
console.log(s.age);
s.age = 200
console.log(s.age);
//we will delete the age property
delete s.age
//object will use prototype age instead
console.log(s.age);


// method 2 - using object

// Such an object is also sometimes called singleton.
// In "classical" languages such as Java, singleton means
// that you can have only one single instance of this class at
// any time, you cannot create more objects of the same class.

const Rooms = {
   id: 0,
   peopleInRoom: 20,
   capacity: 100,
   addPeople: function() {
      console.log(this);
   }
}

Rooms.addPeople()


// method 3 - singleton using function

const Students = new function() {
   this.name = 'Shiraz'
   this.age = 100
   this.show = () => {
      console.log(this.name, this.age);
   }
}

console.log(Students);
console.log(Students.age);
