"use strict";

let name = "vaibhaw";
let age = 24;
let male = true;

let table = {
    "string": name,
    "number": age,
    "boolean": male
};

console.log(table[typeof name]);  // Output: "vaibhaw"
console.log(table[typeof age]);   // Output: 24
console.log(table[typeof male]);  // Output: true
