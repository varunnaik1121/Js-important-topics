//ways to created custom Array methods (Custom map)
//  method-1  using normal function
const customMap = function (array, callback) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    temp.push(callback(array[i], i, array));
  }
  return temp;
};

const arr = [1, 2, 3, 4];
const modifiedArr = customMap(arr, (item, i) => {
  return item * i;
});
// console.log(modifiedArr);

//method 2 using the prototypes

const proArr = [1, 2, 3, 4, 5];

Array.prototype.customMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
  }
  return temp;
};
const modifiedProArr = proArr.customMap((item) => {
  return item * 10;
});
// console.log({ modifiedProArr });

//ways to created custom Array methods (Custom forEach)

Array.prototype.customforEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const forEachArr = [1, 2, 3, 4, 5];
const modified = forEachArr.customforEach((item) => {
  return item * 1;
});
// console.log({ modified });

//ways to created custom Array methods (Custom Reduce)

const reduceArr = [1, 2, 3, 4, 5];
const reducedValue = reduceArr.reduce((acc, currValue) => {
  return acc + currValue;
}, 10);
// console.log(reducedValue); //prints 25

Array.prototype.customReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

// console.log(
//   reduceArr.customReduce((acc, currVal) => {
//     return acc + currVal;
//   }, 0)
// );

//custom function for filter
//method - 1  (using the normal function)

function customFilter(array, callback) {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) == true) {
      temp.push(array[i]);
    }
  }
  return temp;
}

const filterArr = [1, 2, 3, 4, 5];
const filteredValues = customFilter(filterArr, (item) => {
  return item >= 3;
});

console.log({ filteredValues });

//method 2 (By using the built in prototype of array)
Array.prototype.customFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
    continue;
  }
  return temp;
};

// console.log(
//   ['varun', 'kiran', 'nishal'].customFilter((item) => item.includes('r'))
// );
