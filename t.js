// const name = "deepak" + " yadav";
// console.log(name);

// const num = 1;
// const string = "hiii";

// const boolean = true;

// console.log(num);

// console.log(string);
// console.log(boolean);
// console.log(typeof num);
// console.log(typeof string);
// console.log(typeof boolean);


//_____>>>>>>to check the type of<<<<<<______

// function app(a) {
//   return console.log(typeof a);
// }
// app("13");

//____<<<<<Array>>>>___

// let fruits = ["apple", "grapes", "orange", "mango", "blackberry"];

// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let arr = [2, 4, 7, 9, 23, 13, 12];
// let largest = arr[0];
// function largestNumber() {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) largest = arr[i];
//   }
//   console.log(largest);
// }
// largestNumber(arr);

//______<<<<<<objects>>>>>>_____

// const yadav = {
//   name: "deepak",
//   age: 23,
//   country: "india",
// };
// console.log(yadav.name);

// let yadav = {
//   name: "deepak",
//   age: 23,
//   country: "india",
// };

// function yadavji() {
//   return console.log(yadav);
// }
// yadavji(yadav);

//_____>>>>>to check for even number or not<<<<<<<<_______

// let num1 = prompt("enter the number");

// if (num1 % 2 == 0) {
//   document.getElementById("demo").innerHTML = "the given number is even";
// } else {
//   document.getElementById("demo").innerHTML = "the given number is not even";
// }

//_______>>>>>basic calculator<<<<<_______

// let num3 = Number(prompt("enter the number"));
// let num4 = Number(prompt("enter the another number"));
// op = prompt("enter the operator");

// _____ >>>>or<<<<<_____

//
// let num3 = 4;
// let num4 = 4;
// op = "+";
// if (op == "+") {
//   result = num3 + num4;
//   console.log(result);
// } else if (op == "-") {
//   result = num3 - num4;
//   console.log(result);
// } else if (op == "*") {
//   result = num3 * num4;
//   console.log(result);
// } else if (op == "%") {
//   result = num3 % num4;
//   console.log(result);
// } else {
//   console.log("not a valid operator");
// }

//  ---****>>>> Loop  <<<<*****----
// i = 10;
// for (i; i >= 1; i--) {
//   console.log(i);
// }
// if ((i = 1)) {
//   console.log("blast");
// }

//  ___>>>> EVEN NUMBER SUM >>>>___

// var i = 0;
// for (i; i <= 50; i = i + 2) {
//   console.log(i);
// }

//____>>>multiplication>>>____

// let i = 1;
// num = 7;
// for (i; i <= 10; i++) {
//   result = num * i;
//   console.log(result);
// }

// ___>>>>Reverse a string>>>___

// let a = "apple";
// result = a.split("").reverse().join("");
// console.log(result);

// ___>>>> factorial calculator<<<____

// let i = 1;
// let facto = 1;
// for (i; i <= 5; i++) {
//   facto = facto * i;
// }
// console.log(facto);

//____>>>>prime Number Checker<<<<___

// function prime(num) {
//   let i = 2;

//   let isPrime = true;

//   if (num === 1) {
//     console.log(`the ${i} should be prime or composite number`);
//   } else if (num > 1) {
//     for (i = 2; i < num; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log("given number is prime number");
//     } else {
//       console.log("the given number is not a prime number");
//     }
//   }
// }

// prime(6);

//______<<<<<DOM<<<<<____

//____<<<<change color of text in paragraph

// function colorChange() {
//   let element = document.getElementById("demo");
//   element.style.color = "green";
// }

//______>>>>>increment and decrement>>>>>_____

// let i = 0;
// document.getElementById("demo").innerText = i;

// function increment() {
//   i = i + 1;
//   document.getElementById("demo").innerText = i;
// }

// function decrement() {
//   if ((i = i - 1) > 0) {
//     document.getElementById("demo").innerText = i;
//   } else {
//     document.getElementById("demo").innerHTML = "should not be negative";
//   }
// }
