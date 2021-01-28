## 1. If a function doesn't explicitly use the "return" operator, what will the return value be when the function is invoked?
- A. NaN
- B. null
- C. undefined
- D. false

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 2. What does Object.keys(x) return?
- A. Returns true if x has at least one property
- B. A key that can be used to unlock the object after Object.freeze(x)
- C. All properties of x as an array of strings, including non-enumerable properties
- D. The enumerable properties of x as an array of strings

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 3. What is the result of running the following code?
```
function f() {
    'use strict';
    foo = 'bar';
}
f();
```
- A. It enables the JavaScript strict mode and creates a variable named foo in the global object (window).
- B. It throws an error because foo is not defined.
- C. It causes a syntax error on the 'use strict' line.
- D. It creates a variable named foo in the global object (window).

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 4. What does the following expression return?
1 + 5 + " bottles of milk”;
- A. undefined. An exception is thrown
- B. "5 bottles of milk"
- C. "15 bottles of milk"
- D. "6 bottles of milk"

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 5. What is a closure?
- A. A variable in a local scope
- B. A way to define the lifetime of a variable
- C. A function that uses variables from the outer scope
- D. A variable in the global scope

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 6. Which is the proper way to do prototypal inheritance?
- A.
```
function superclass() {this.stuff="stuff";}
function subclass() {}
subclass.prototype = new superclass();
```
- B.
```
function superclass() {this.stuff="stuff";}
var subclass = new superclass();
```
- C.
```
function superclass() {this.stuff="stuff";}
function subclass(superclass) {}
```
- D.
```
function superclass() {this.stuff="stuff";}
function subclass() {subclass.prototype = new superclass();}
```

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 7. What does "2" + 3 + 4 evaluate to?
- A. '27'
- B. "9"
- C. '234'
- D. 9
- E. "54"

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 8. How would you iterate over the following object?
var my_data = {a: 'Ape', b: 'Banana', c: ‘Citronella'};
- A. None of these because you can only iterate over arrays, not objects
- B. for (var key in my_data) {}
- C. for (var i = 0; i < my_data.length; i++) {}
- D. foreach (my_data as key => value) {}

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 9. What is the difference between using call() and apply() to invoke a function with multiple arguments?
- A. apply() is identical to call(), except apply() requires an array as the second parameter.
- B. apply() is deprecated in favor of call().
- C. apply() is identical to call().
- D. apply() is identical to call(), except call() requires an array as the second parameter.

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 10. Which standard JavaScript method would truncate Math.PI to 3.14 ?
- A. Math.PI.toFixed(2)
- B. Math.PI.toPrecision(2)
- C. Math.round(Math.PI)
- D. Math.PI.toString("D2")

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 11. Which of the following array object functions modifies the array when called?
- A. concat()
- B. slice()
- C. splice()

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 12. What should be done to reserved words when they are used as keys in object literals?
- A. They should be escaped.
- B. They should be prefixed with the @ operator.
- C. They should be quoted.
- D. This is not possible in Javascript.

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 13. What defines a local scope?
- A. function and while
- B. function and if
- C. function
- D. Any JavaScript block

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 14. What does the following return?
Number(null);
- A. null
- B. 1
- C. undefined
- D. 0

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details> 

## 15. What is written to the console when the following code is executed?
```
function foo (a) {
    console.log("single parameter function")
};
function foo (a, b) {
    console.log("two parameter function");
}
function foo (a, b, c) {
    console.log("three parameter function");
}
foo("hello", "goodbye");
```

- A. single parameter function
- B. Nothing
- C. two parameter function
- D. three parameter function

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 16. Given the following, what is the value of x?
var x = typeof null;
- A. "object"
- B. "null"
- C. null
- D. undefined

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details> 

## 17. What is the type of `null`, according to the `typeof` operator?
- A. "array"
- B. "undefined"
- C. "object"
- D. "null"

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 18. Which of following will invoke a function?
- A. function.apply(...)
- B. function.Apply(...)
- C. function.invoke(...)
- D. function.exec(...)

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 19. Which of the following is a standard RegExp literal format?
- A. var re = RegExp(pattern, flags)
- B. var re = RegExp/pattern/flags
- C. var re = /pattern/flags
- D. var re = "pattern" % "flags"

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>

## 20. Which string prototype method is capable of removing a character from a string?
- A. remove()
- B. destroy()
- C. replace()
- D. delete()

<details>
    <summary>Click to see the answer</summary>
    ✅ Z. Result
</details>