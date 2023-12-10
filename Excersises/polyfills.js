// // const arr = [1, 2, 3, 4, 5];
// //arr.filter((item,index,arr)=>[])
// //polyfills arre used when the native browser does not support the methods like map reduce etc... to create the own function from scratch
// //------forEach polyfill--------------
// Array.prototype.polyforEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     arr[i] = callback(this[i], i, this);
//   }
// };
// arr.polyforEach((item) => item * 2);
// //map polyfill
// Array.prototype.polyMap = function (callback) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(callback(this[i], i, this));
//   }
//   return temp;
// };
// //using the custom map method
// const newArr = arr.polyMap((item) => {
//   return item * 2;
// });
// console.log(newArr);

// //-----polyfill reduce method--------

// Array.prototype.polyfillReduce = function (callback, initialValue) {
//   var accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator
//       ? callback(accumulator, this[i], i, this)
//       : this[i];
//   }
//   return accumulator;
// };

// // const nums = [1, 2, 3, 4];
// const sum1 = nums.polyfillReduce((acc, initialValue, i, nums) => {
//   return acc + initialValue;
// }, 0);
// console.log(sum1);

// // const arr = [1, 2, 3, 4];

// Array.prototype.polyReduce = function (callback, initialValue) {
//   var accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator
//       ? callback(accumulator, this[i], i, this)
//       : this[i];
//   }
//   return accumulator;
// };
// const sum = arr.polyReduce((acc, currValue) => {
//   return acc + initialValue;
// }, 5);

// console.log(sum);

// //includes polyfill creation----
// const arr = [1, 2, 3, 4, 5];

// Array.prototype.polyInludes = function (item, searchIndex) {
//   if (!(searchIndex < this.length)) {
//     console.log("search Index can't be greater than length of array!");
//     return null;
//   }
//   for (let i = searchIndex; i < this.length; i++) {
//     if (this[i] == item) {
//       return true;
//     }
//   }
//   return false;
// };

// const isFound = arr.polyInludes(2, 5);
// console.log(isFound);

//polyfill for push in js
const pushArr = [1, 2, 3, 4, 5];

Array.prototype.myPush = function (...items) {
    
};

