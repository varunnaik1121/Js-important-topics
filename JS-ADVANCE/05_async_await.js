//Async await practices
// let promsie = new Promise((res, rej) => {
//   res(100);
// });

// async function test() {} //the empty async functions always returns the promsie that is fulfilled

// console.log(test());

async function name1() {
  return 'varun';
}
//the above function is similar to below

console.log(name1());

//this will print the value 1
async function name2() {
  let res1 = await Promise.resolve(1).then((res) => res);
  console.log(res1);
}

console.log(name2());

//the below code will print the value undefined
function name3() {
  let res1 = Promise.resolve(1).then((res) => res);
  console.log(res1);
}

console.log(name3());

//the return value of the async function is thevalue we can get
async function test1() {
  let res = await 1;
  return 'res';
}
console.log(test1());

//IMPORTANT-NOTE: async functions always returns the promises with the return value set as the promise result and the state is always pending

function test3() {
  Promise.resolve(2).then((res) => console.log(res));

  console.log('after ans');
}

test3();

console.log('after the function');

//output will be 1->'after ans' 2->after the function 3-> 2  in this order

const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p == basicReturn()); // true //if the resolved promise is same then its true
console.log(p == asyncReturn()); // false//returns the different reference when the async function is wrapped
