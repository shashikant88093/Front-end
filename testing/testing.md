# JavaScript Function Testing

Function testing in JavaScript ensures that a function behaves as expected. There are several ways to test functions depending on the complexity and requirements of your project.

---

## 🔹 Types of Function Testing in JavaScript

1. **Unit Testing** - Testing individual functions in isolation.
2. **Integration Testing** - Testing functions together with other modules.
3. **End-to-End (E2E) Testing** - Testing the function as part of the full system.
4. **Regression Testing** - Ensuring that new changes do not break existing functionality.
5. **Performance Testing** - Evaluating the speed and efficiency of functions.
6. **Security Testing** - Ensuring functions do not introduce vulnerabilities.

---

## 🔹 How to Test a JavaScript Function?

### ✅ Using Console Logging (Basic Debugging)
Simple but not ideal for automated testing.

```js
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Expected output: 5
```

### ✅ Using Assertions (Built-in)

```js
console.assert(add(2, 3) === 5, "Test failed: add(2, 3) should be 5");
```

### ✅ Using Jest (Recommended for Unit Testing)
Jest is a popular testing framework.

#### 1️⃣ Install Jest:
```sh
npm install --save-dev jest
```

#### 2️⃣ Create `sum.js`:
```js
function sum(a, b) {
    return a + b;
}
module.exports = sum;
```

#### 3️⃣ Create `sum.test.js`:
```js
const sum = require('./sum');

test('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5);
});
```

#### 4️⃣ Run Tests:
```sh
npx jest
```

---

### ✅ Using Mocha & Chai
Mocha is a test framework; Chai provides assertion methods.

#### 1️⃣ Install:
```sh
npm install --save-dev mocha chai
```

#### 2️⃣ Create `sum.test.js`:
```js
const { expect } = require('chai');
const sum = (a, b) => a + b;

describe('Sum Function', () => {
    it('should return 5 for sum(2, 3)', () => {
        expect(sum(2, 3)).to.equal(5);
    });
});
```

#### 3️⃣ Run:
```sh
npx mocha
```

---

## 🔹 Best Practices for Function Testing

✅ Test edge cases (e.g., negative numbers, zero, large values).  
✅ Use mocks/stubs when testing functions with dependencies.  
✅ Automate tests using CI/CD tools.  
✅ Ensure test cases cover expected and unexpected inputs.  
✅ Optimize test performance to avoid unnecessary execution time.  
✅ Implement security testing to prevent vulnerabilities.  
✅ Maintain clear and concise test documentation.  


