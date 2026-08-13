'use strict';

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.

const singleMenu = {
  name: "Cheese Burger & Sprite",
  price: 12.8,
  vegetarian: false,
  desert: null,
  fries:null
  validPromotionsDate: new Date("2026-12-12"),
};

console.log(singleMenu.name);
console.log(singleMenu.price);

const propertyMenu = "Meat Burger"
console.log(singleMenu[propertyMenu]);
// Bracket reads and writes through a string, which is required exactly when the key lives in a variable.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.


const singleMenu = {
  name: "Cheese Burger & Sprite",
  price: 12.8,
  vegetarian: false,
  desert: null,
  fries:null
  validPromotionsDate: new Date("2026-12-12"),
  describe: function () {
    return `${this.name} costs ${this.price} euros`;
};
}
console.log(singleMenu.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const bigMenu = [
  { name: "Burger", size: "XL", total: "15.1", vegan: false },
  { name: "Pizza", size: "Normal", total: "5.52", vegan: true },
  { name: "Hot dog", size: "small", total: "7.02", vegan: false },
];

for (const menu of bigMenu) {
  console.log(`${menu.name}, ${menu.genre}, ${menu.total} of food`);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.

const veganFood = bigMenu
  .filter((item) => item.vegan)
  .map((item) => item.name);

console.log("Vegan food:", veganFood);

const cheapFood = bigMenu.find((item) => Number(item.total) < 6.0);
console.log("Cheap item:", cheapItem);

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.

const bigMenu = [
  { name: "Burger", size: "XL", total: "15.1", vegan: false },
  { name: "Pizza", size: "Normal", total: "5.52", vegan: true },
  { name: "Hot dog", size: "small", total: "7.02", vegan: false },
];

const menuItem = bigMenu[0];

for (const [key, value] of Object.entries(menuItem)) {
  console.log(`${key}: ${value}`);
}

console.log("Keys:", Object.keys(menuItem));
console.log("Values:", Object.values(menuItem));

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.

const itemReference = bigMenu[0];
itemReference.total = "18.50";

console.log("Original item (affected by reference change):", bigMenu[0]);

const itemCopy = { 
  ...bigMenu[0], 
  total: "12.00" 
};

console.log("Item from the Menu:", bigMenu[0]);
console.log("Spread copy object:", itemCopy);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence = "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const words = sentence.split(" ");
const wordCounts = {};

for (const word of words) {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
}
console.log("Word Frequencies:", wordCounts);

const sortedResult = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
console.log("Sorted by frequency:", sortedResult);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
