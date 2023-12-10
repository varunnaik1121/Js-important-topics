// let and const

var name = 'varun';
if (true) {
  var name = 'kiran';
  console.log(name);
}

console.log(name); //output=>kiran kiran

let name = 'varun';
if (true) {
  let name = 'kiran';
  console.log(name);
}

console.log(name); //output=>kiran varun

// var and let declaration
console.log(a);
var a;
a = 20;
