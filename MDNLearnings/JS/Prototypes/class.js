class polygon {
 constructor(shape, sides) {
     this.shape = shape
     this.sides = sides
     
 }   

 getShape() {
     console.log(this.shape);
 }

 setShape(shape) {
     this.shape = shape   
 }
}

class square extends polygon {
    constructor() {
        super('square', 4)
    }
    // this function is not required
    // as using prototype chain it finds the function
    // first checks square and then its parent
    // getShape() {
    //     super.getShape()
    // }


    static getArea(side) {
        console.log("side square", side*side);
        
    }
}

class triangle extends polygon {
    constructor() {
        super('triangle', 3)
    }
}
const sqObj = new square()
sqObj.getShape()


// to check if 2 objects from 2 classes with same parent
// get separate parent value for shape


const trObj = new triangle()
trObj.getShape()

// static function
square.getArea(12)