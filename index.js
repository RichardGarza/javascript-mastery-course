// Factory Function

function createCircle(radius) {
  const circle = {
    radius,
    draw: function () {
      console.log('draw');
    },
  };
}

const circle = createCircle(1);

// Constructor Function

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log('draw');
    });
}

const another = new Circle(1);

// I just realized JavaScript has a delete button, fml.
delete circle;

console.log(circle);
console.log('index.js running');
