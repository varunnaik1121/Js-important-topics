console.log(name); //print undefined because it does not know whether the value is assignned
var name = 'varun'; //runs
console.log(name1);
let name1 = 'varun'; //reference error cannot access before initialization

console.log(name2);
const name2 = 'varun'; //reference error cannot access before initialization

print();
const print = function () {
  console.log('hello'); //output Reference Error (Because function expresssions are not hosited)
};

// scope of variables

{
  let x = (y = 10); //let x=10; and y=10 which is a window object global
  console.log({ x });
}
console.log({ y });

{
  let name = 'varun';
}
let name = 'kiran'; //name is
console.log(name);
