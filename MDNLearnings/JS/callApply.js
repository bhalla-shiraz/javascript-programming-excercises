// Call Vs apply

// call arguments are comma separated
// apply arguments are in an array
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  var cheese = new Food('feta', 5);
  var fun = new Toy('robot', 40);
  console.log(cheese);

  console.log(cheese instanceof Product);


//   call to anonymous function

var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }



//   just the context
function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
  }
  
  var obj = {
    animal: 'cats', sleepDuration: '12 and 16 hours'
  };
  
  greet.call(obj);  // cats typically sleep between 12 and 16 hours
  
  

//   no context
var sData = 'Wisen';
            
function display(){
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen 





// APPLY

args = [1,13,2,33,4,5,677]
console.log(Math.max.apply(null, args))



// convert args to array
function testMultipleNumbers() {
    console.log(arguments);
    // convert to array
    var args = Array.prototype.slice.call(arguments)
    console.log(args);
    
}

testMultipleNumbers(1,2,3,4,5,6)
