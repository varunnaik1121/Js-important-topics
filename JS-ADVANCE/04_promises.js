// //promises has 3 states pending,fullfilled and rejected

// let promise = new Promise((res, rej) => {});
// console.log(promise);

// let promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1);
//   }, 2000);
// });
// let promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1);
//   }, 0);
// });

// console.log(promise1); //pending
// console.log(promise2); //pending

// //promises states are pedning at that time

let promsie3 = new Promise((res, rej) => {
  let result = res(2);
  return 'hello world'; //this return is waste because after the res() is called the res value is automattically returned
});

console.log(promsie3.then((res) => console.log(res))); //this will print the {2} because the resolved value is 2;
