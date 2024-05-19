//callback is a function whcich is passed to another function as argument which it will execute after the previous function call thats why callback later meaning

//below here cb is the callback
function printName(name, cb) {
  const fullName = name + ' naik';
  cb(fullName);
}
function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}
printName('varun', reverseString);

//examples
//In the below example map has a callback function
//callback allows us to perfom async operations through setTimeout and addEventListener etc....
let arr = [1, 2, 3, 4];
let res = arr.map((item) => item * 10);
