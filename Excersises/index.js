//output will be 5 5 5 5 5
//because var is a global scope
// for (var i = 0; i <= 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// //output->0 1 2 3 4
// //let scope has a block level scope
// for (let i = 0; i <= 4; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// console.log(undefined === undefined);
//closure example
// function createHelper(num) {
//   console.log({ num });
//   return function addNum(num1) {
//     console.log({ num1 });
//   };
// }
// var addNum = createHelper(6);
// console.log(addNum(10)); //16
// console.log(addNum(15)); //21
// let num = 10;
// function parent() {
//   console.log(num);
//   return (function () {
//     let num = 15;
//     return num;
//   })();
// }
// console.log(parent());

//time optimization using closure

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 100000; i++) {
//     a[i] = i * 10;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// console.time('6');
// find(6);
// console.timeEnd('6');
// console.time('100');
// find(100);
// console.timeEnd('100');

//closure example-1

// (function printAll() {
//   for (var i = 0; i < 4; i++) {
//     function printValue(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000);
//     }
//     printValue(i);
//   }
// })();

// function sum(a) {
//   return function second(b) {
//     return function third(c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(3)(4));

// function evaluate(operation) {
//   return function (num1) {
//     return function (num2) {
//       if (operation === 'multiply') {
//         return num1 * num2;
//       }
//       if (operation === 'subtract') {
//         return num1 - num2;
//       }
//       if (operation === 'divide') {
//         return Math.floor(num1 / num2);
//       }
//       if (operation === 'addition') {
//         return Math.floor(num1 + num2);
//       }
//     };
//   };
// }

// console.log(evaluate('divide')(4)(2));
// console.log(evaluate('addition')(4)(2));
// console.log(evaluate('multiply')(4)(2));
// console.log(evaluate('subtract')(4)(2));

// function operation(arguments) {
//   console.log(arguments);
// }

// operation(4, 2, 3, 4);

//infinite currying
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }
// console.log(add(2)(3)(4)(6)(12)());
// function add(num) {
//   return function (num1) {
//     return num1 + num;
//   };
// }
// const addNum = add(10);
// console.log(addNum(12));
//weird js behavior
// function test() {
//   let name = 'varun';
//   (function () {
//     var name = 'kiran';
//     console.log(name);
//   })();

//   console.log(name);
// }
// test();
