// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:
const orderSize = 14;
if (orderSize > 12) {
  console.log("Large order, call the bakery ahead");
} else if (orderSize > 6) {
  console.log("Medium order, ready in an hour");
} else {
  console.log("Small order, walk right in");
}

function Order(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}
console.log("size 15:");
Order(15);

console.log("size 8:");
Order(8);

console.log("size 4:");
Order(4);

console.log("size 12:");
Order(12);

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.

function getOrder(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}

console.log(getOrder(15));
console.log(getOrder(8));
console.log(getOrder(4));
console.log(getOrder(12));

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
function double(n) {
  return n * 2;
}
function shout(text) {
  return `${text.toUpperCase()}!`;
}

const double = function (n) {
  return n * 2;
};

const shout = (text) => `${text.toUpperCase()}!`;

console.log("Testing double:");
console.log(double(4));
console.log(double(10));

console.log("Testing shout:");
console.log(shout("hello"));
console.log(shout("javascript"));

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.

function getOrder(orderSize = 1) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  } else {
    return "Small order, walk right in";
  }
}
console.log("Supplying 15:");
console.log(getOrderMessage(15));

console.log("(uses default = 1):");
console.log(getOrderMessage());

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }

function repeat(callback, count) {
  let i = 1;
  while (i <= count) {
    callback(i);
    i = i + 1;
  }
}
repeat((currentRun) => {
  console.log(`Iteration #${currentRun}: Testing code! `);
}, 4);

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
// console.log(insideIf); // Uncommenting this line causes a ReferenceError!

// first console prediction: Welcome to The Corner Bakery, Juan
// second console prediction:  Maison Sarah
// third Console: Error

const shopName = "Maison Sarah";

function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Juan"));
console.log(shopName);

if (true) {
  const insideIf = "visible in here";
  //console.log(insideIf);
}
console.log(insideIf);

// first console prediction: Welcome to The Corner Bakery, Juan
// second console prediction:  Maison Sarah
// third Console: Visible in Here

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

function temperatureConverter(celsius) {
  let answerF = (celsius * 9) / 5 + 32;
  return answerF;
}

function temperatureConverter(fahrenheit) {
  let answerC = ((fahrenheit - 32) * 5) / 9;
  return answerC;
}
console.log("=== CELSIUS A FAHRENHEIT ===");

let cel1 = 0;
let fah1 = temperatureConverter(c1);
console.log(c1.toFixed(1) + "C equal to " + f1.toFixed(1) + "F");

let c2 = 21;
let f2 = temperatureConverter(c2);
console.log(c2.toFixed(1) + "C equal to " + f2.toFixed(1) + "F");

let c3 = 100;
let f3 = temperatureConverter(c3);
console.log(c3.toFixed(1) + "C equal to " + f3.toFixed(1) + "F");
//-------
console.log("\n=== FAHRENHEIT A CELSIUS ===");

let fah2 = 32;
let cel2 = temperatureConverter(fah1);
console.log(fah1.toFixed(1) + "F equal to " + cel1.toFixed(1) + "C");

let fah3 = 70;
let cel3 = temperatureConverter(fah2);
console.log(fah2.toFixed(1) + "F equal to" + cel2.toFixed(1) + "C");

let fah4 = 212;
let cel4 = temperatureConverter(fah3);
console.log(fah3.toFixed(1) + "F equal to" + cel3.toFixed(1) + "C");

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
// const answer = 42;
// console.log(answer.toUpperCase());

try {
  const answer = 42;
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`This is the mistake: ${error.message}`);
}
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
