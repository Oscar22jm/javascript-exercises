"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const bakeryName = "Bakery Sarah";
const cityName = "Wonderland";
const addressName = "Sherman Str 123"; // This 3 variables are Const because never change.

let orderCount = 3;
let clientCount = Math.random(); // This 3 are let because the number of clients and the orders can change at any time.

console.log(bakeryName);
console.log(cityName);
console.log(addressName);

orderCount = 4;
console.log(orderCount);

clientCount = Math.random();
console.log(clientCount);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.

console.log(typeof "Bakery Sarah");
console.log(typeof "Wonderland");
console.log(typeof "Sherman Str 123");

console.log(typeof 4);
console.log(typeof Math.random());

console.log(typeof null); // This "null" is an historical wrong that shows "Object" its like this since 1995
console.log(typeof undefined);

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

const nothing;
const zero = null;

console.log(nothing);
console.log(zero);
// Null is assigned intentionally to express o declare that there is no value in the Variable.
// While undefined means that a variable does not have a definition

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";
const myNumber = "22";

console.log(Number("4.50"));
console.log(Number("12"));
console.log(Boolean("true"));
console.log(String(myNumber));
// the Variable Const flagtext = "true showed NaN because is not a number but a text or string"

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
const bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";
openingHour = 7;
console.log(loafCount);
let loafCount = 12;
// The Variable const bakeryName = "Maison Sarah"; is re-asigned again with bakeryName = "The Corner Bakery";
// It is necesary to declare always and first the variable then use the console.log
// Repoair:

let bakeryName = "Maison Sarah"; //change const to let
bakeryName = "The Corner Bakery"; // Or letting const bakeryName = "Maison Sarah"; and delete this line
openingHour = 7;

let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.

const a = 2;
const b = 4;

[a, b] = [b, a];

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
