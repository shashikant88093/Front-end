# JavaScript Functions

In JavaScript, functions can be written in various styles and formats depending on their purpose and how they are intended to be used. Here's a comprehensive overview of all the main types of functions in JavaScript:

---

### 1. **Function Declaration**
A function defined using the `function` keyword, which can be hoisted.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5
```

---

### 2. **Function Expression**
A function stored in a variable; it is not hoisted.

```javascript
const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(5, 2)); // Output: 3
```

---

### 3. **Arrow Function**
A shorter syntax for writing functions. It does not have its own `this` or `arguments`.

```javascript
const multiply = (a, b) => a * b; // Implicit return for single-line expressions

console.log(multiply(3, 4)); // Output: 12
```

With multiple lines:
```javascript
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

console.log(divide(10, 2)); // Output: 5
```

---

### 4. **Immediately Invoked Function Expression (IIFE)**
Functions that are executed immediately after they are defined.

```javascript
(function () {
  console.log("IIFE executed");
})();
```

With parameters:
```javascript
((name) => {
  console.log(`Hello, ${name}`);
})("Shashikant");
```

---

### 5. **Constructor Function**
Used to create objects with the `new` keyword.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Toyota", "Camry", 2021);
console.log(myCar.make); // Output: Toyota
```

---

### 6. **Class Method**
Methods inside ES6 classes.

```javascript
class Calculator {
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(3, 2)); // Output: 5
```

---

### 7. **Getter and Setter**
Special methods in objects or classes to get and set properties.

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const person = new Person("John");
console.log(person.name); // Output: John
person.name = "Jane";
console.log(person.name); // Output: Jane
```

---

### 8. **Default Parameters**
Functions with default parameter values.

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet(); // Output: Hello, Guest
greet("Shashikant"); // Output: Hello, Shashikant
```

---

### 9. **Rest Parameters**
Allows a function to accept an indefinite number of arguments as an array.

```javascript
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4)); // Output: 10
```

---

### 10. **Callback Function**
A function passed as an argument to another function.

```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("Shashikant", () => {
  console.log("Welcome!");
});
```

---

### 11. **Async/Await Functions**
Functions for asynchronous code that use `async` and `await`.

```javascript
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
};

fetchData();
```

---

### 12. **Generator Function**
Special functions defined with `function*` that can yield multiple values.

```javascript
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
```

---

### 13. **Object Methods**
Functions defined directly inside objects.

```javascript
const person = {
  name: "Shashikant",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet(); // Output: Hello, Shashikant
```

---

### 14. **Recursive Functions**
Functions that call themselves.

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

---

### 15. **Higher-Order Functions**
Functions that take other functions as arguments or return them.

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```

---

These are the main types of functions in JavaScript. Let me know if you'd like a deep dive into any specific type!
