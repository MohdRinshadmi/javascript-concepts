// 1. What is currying in javascript?
//   >>  Currying is used in javascript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

// - [ ]  It converts a function with multiple parameters into a sequence of functions.
// - [ ]  Each function takes a single argument and returns another function until all arguments are received.
// - [ ]  Helps in functional programming by enabling function reusability and composition.


// 2. When to use currying function?
//   >>  In javascript, currying function is used in the following cases

// - [ ]  Partial Application: In the partial application we set some arguments in advance in the function and call it later with the remaining arguments.
// - [ ]  High-Order Functions: When one function takes the other function as arguments (eg: map, filter , reduce) in that case we can use the currying function to manage the arguments more effectively.
// - [ ]  Functional Programming: Where functions are treated as important and focus is on not changing data and combining functions in those cases currying works perfectly.



let multiply = function(x, y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2) // executing bind method, this is same as copying the above code and write.
multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3) // executing bind method, this is same as copying the above code and write.
multiplyByThree(5)