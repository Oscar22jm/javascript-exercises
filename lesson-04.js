"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction: 3 // Result: False
console.log(3 == "3"); // prediction: 3 // Result: "51"
console.log("5" - 1); // prediction: Nan // Result: 2
console.log("5" + 1); // prediction: Nan // Result: true
console.log(1 + true); // prediction: 2 // Result: false
console.log(10 >= 10); // prediction: 10 // Result: true
console.log(!(5 > 2)); // prediction: 7 // Result: false
console.log(4 !== "4"); // prediction: 4 // Result: true
console.log("b" > "a"); // prediction: "b""a" // Result: true
console.log(0 === -0); // prediction: 0 // Result: true

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.

const age = 20;

if (age >= 18) {
  console.log("Access granted: You are an adult.");
} else {
  console.log("Access denied: You must be at least 18 years old.");
}
//Result: Access granted: You are an adult.

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.

function orderPricing(itemCount) {
  if (itemCount > 12) {
    console.log(
      `Order size: ${itemCount} items -> Bulk discount applied! (Over 12 items)`,
    );
  } else if (itemCount > 6) {
    console.log(
      `Order size: ${itemCount} items -> Standard discount applied! (7–12 items)`,
    );
  } else {
    console.log(
      `Order size: ${itemCount} items -> Regular pricing applied. (6 or fewer items)`,
    );
  }
}

// The most specific question contain the parameters and other information that will be use in the code
//then the code is evaluated from top to bottom until Javascript match a True or False

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];

// Predictions vs. Actual Results using Boolean()
const results = courtValues.map((value) => {
  return {
    value: typeof value === "string" ? `"${value}"` : String(value),
    isTruth: Boolean(value),
  };
});
console.log(results);
// false: Prediction: FALSE // Result: FALSE
// 0 : Prediction: FALSE // Result: FALSE
// "0" Prediction: FALSE // Result: TRUTH
// "" Prediction: FALSE // Result: FALSE
// " "  Prediction: FALSE // Result: TRUTH
// "bread" Prediction: TRUTH // Result: TRUTH
// null Prediction: FALSE // Result: FALSE
// undefined Prediction: FALSE // Result: FALSE

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
const day = "Sunday";
if (day === "Saturday") {
  console.log("Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}
// ------------RESULT -----------------------

function getSchedule(day) {
  switch (day) {
    case "Saturday":
      console.log("Open 7:00 to 14:00");
      break;
    case "Sunday":
      console.log("Open 8:00 to 12:00");
      break;
    case "Monday":
      console.log("Closed today");
      break;
    default:
      console.log("Open 7:00 to 18:00");
      break;
  }
}

// TODO: Part six.
// The file ends with a short broken program that contains an assignment where a comparison was
// intended, and a `switch` with a missing `break`. Run it, observe both incorrect behaviors,
// repair both, and describe each repair in one comment line.

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";
if ((shopStatus = "open")) {
  console.log("Welcome in");
}
const size = "M";
switch (size) {
  case "S":
    console.log("Small");
  case "M":
    console.log("Medium");
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}
// ---------- RESULT -----------------------

let shopStatus = "closed";

// Here I Replaced assignment operator (=) with (===) so it compares instead of assigning.
if (shopStatus === "open") {
  console.log("Welcome in");
}
const size = "M";
switch (size) {
  case "S":
    console.log("Small");
    break;
  case "M":
    console.log("Medium");
    break; // Here I Added a break statement
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}
// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.

function checkYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

let year1 = 2024;
let year2 = 1900;
let Year3 = 2000;

if (checkYear(year1) === true) {
  console.log(year1 + " es bisiesto");
} else {
  console.log(year1 + " NO es bisiesto");
}

if (checkYear(year2) === true) {
  console.log(year2 + " es bisiesto");
} else {
  console.log(year2 + " NO es bisiesto");
}

if (checkYear(year3) === true) {
  console.log(year3 + " es bisiesto");
} else {
  console.log(year3 + " NO es bisiesto");
}

// FizzBuzz test code for a single number!

let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
