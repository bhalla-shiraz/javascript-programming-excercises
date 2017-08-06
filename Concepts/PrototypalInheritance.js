// following example creates a prototype
// then we assign a property to newly created object
// if property is deleted then it takes the default prototype propery
(function() {
	var genericObject = {
		bar : "Hello World",
		get_bar : function() {
			return this.bar;
		}
	};
	var customObject = Object.create(genericObject);
	customObject.bar = "Aloha folks!";
	console.log(customObject.get_bar()); //outputs: "Aloha folks"
	delete customObject.bar;
	console.log(customObject.get_bar()); //fallbacks to the prototype's value, outputs: "Hello World"
})();


// JavaScript is a class-free, object-oriented language, and as such, it uses
// prototypal inheritance instead of classical inheritance.

function student(n) {
   this.name = n,
   this.printName = () => {
      console.log(name);
   }
}

let s = new student('Shiraz')
console.log(s.name);
console.log(s);

s.age = 100

console.log(s);


let k = new student('bhalla')
console.log(k);








//
//
//
//
//
//

function Emitter() {
   this.name = ''
   this.callback = () => ({})
   this.subscribe = (name, callback) => {
     this.name = name
     this.callback = callback
     this.list.push({
                name,
                callback
            })
      return this
   }
   this.emit = (name, foo, bar) => {
         this.list.forEach((sub) => {
         sub.callback(foo, bar)
      })
   }
   this.release = () => {
         this.list = this.list.filter((item) => item.name !== this.name)
   }
}

Emitter.prototype.list = []


const emitter = new Emitter()

const sub1 = emitter.subscribe('event_name', (foo, bar) => {
                console.log('sub1', foo, bar)
})
const sub2 = emitter.subscribe('other_name', (foo, bar) => {
                console.log('sub2', foo, bar)
})
emitter.emit('event_name', 'foo', 'bar')
sub1.release()
emitter.emit('event_name', 'foo', 'bar')


// 
