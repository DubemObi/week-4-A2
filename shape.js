/*
Create an object called shape that has the type property and a getType() method. Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle. Add a new method to the prototype called getPerimeter().
*/

function Shape(type) {
  this.type = type;
  this.getType = function () {
    return this.type;
  };
}

function Triangle(type, a, b, c) {
  Shape.call(this, type),
    (this.a = a),
    (this.b = b),
    (this.c = c),
    (this.getPerimeter = function () {
      return this.a + this.b + this.c;
    });
}
let circleShape = new Shape("Circle");
// console.log(circleShape.getType());

let myTriangle = new Triangle("Triangle", 2, 3, 4);
console.log(myTriangle.getPerimeter());
