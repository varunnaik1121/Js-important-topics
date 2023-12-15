firstName = 'varun';
lastName = 'kiran';
let print = function printName(age) {
  return `My name is ${this.firstName} ${this.lastName} and age is ${age}`;
};

let user1 = {
  firstName: 'varun',
  lastName: 'naik',
};

let user2 = {
  firstName: 'nishal',
  lastName: 'raj',
};

console.log(print.apply(user2, [56]));
console.log(print.apply(user1, [68]));
