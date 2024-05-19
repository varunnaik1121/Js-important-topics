//important var,let,const interview
// console.log(x); //reference error as x is not defined only let,var and const are hoisted
// x = 10;

var a = 1;
function test() {
  a = 10;
  function a() {}
}
test();
console.log(a);

function print() {
  console.log('1');
}
print();
function print() {
  console.log('2');
}
print();

//question -1
//functions can be reassigned and it will hold the latest values
function test() {
  console.log('test');
}
function test() {
  console.log('test updated');
}
console.log(test());

//this is same as var x=10;

//Question-2

//let and const cant be re assigned within the same scope

let name = 'varun';
{
  let name = 'kiran';
  console.log(name);
}

//Question-3
//if variables decalred without var,let,const as cosnidered as global scope
// function scope() {
//   x = 10;
// }
// scope();
// console.log(x);

//Question-4
//variables inside function scope are declared using var are fucntion scoped
// function scope() {
//   var b = 10;
// }
// scope();
// console.log(b);

//Question-5
var testing = 1;
function outer() {
  testing = 10;
  function testing() {}
}
outer();
console.log(testing);
