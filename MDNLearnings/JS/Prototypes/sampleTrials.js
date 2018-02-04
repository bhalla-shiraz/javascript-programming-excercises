function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
  }
  MyObject.prototype.getName = function() {
    return this.name;
  };
  MyObject.prototype.getMessage = function() {
    return this.message;
  };

  var obj = new MyObject('shiraz', 'hi')
  console.log(obj.getName());
  

  const es6MyObj = (name) => {
      this.name = name.toString()
  }

  String.prototype.toString = function() {
      
      console.log(this + 'append');
      
      return 'this is a'
  }

  console.log('tester'.toString());
  