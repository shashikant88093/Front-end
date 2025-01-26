//  WIth constructor function

// function Car(make, model, year) {
//   this.make=make;
//   this.model=model;
//   this.year=year;
// }

// const suzuki = new Car("sign", "Breeza", "2025");

// console.log(suzuki.make);

//  same with arrow function

const Car = (make, model, year) => {
  return {
    make,
    model,
    year,
  };
};

const mahindra = Car("Sign", "Breeza", "2025");

console.log(mahindra.make);

// Key Changes:
// Since arrow functions cannot be used as constructors with new, we instead return an object directly.
// The properties (make, model, year) are defined as part of the returned object.
// Explanation:
// Arrow functions are great for simpler functional expressions or when you don't need to use new. For constructor-like purposes where this is required, stick with function instead.



// 1. Function Declaration 
// A function defined using the function keyword, which can be hoisted.
function add(a,b){
    return a + b
}

console.log(add(2,3))


//  2. Function Expression
// A function stored in a variable; it is not hoisted.
const subtract=  function(a,b){
    return a - b
}


// 3. Arrow Function
// A shorter syntax for writing functions. It does not have its own this or arguments.
//  with single line

const multiply = (a, b) => a * b; // Implicit return for single-line expressions

console.log(multiply(3, 4)); // Output: 12


// with multiple Lines

const divide = (a, b) => {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  };
  
  console.log(divide(10, 2)); // Output: 5
  
