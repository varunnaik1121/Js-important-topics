// const promsiseDemo = () => {
//   return new Promise((res, reject) => {
//     let a = 21;
//     if (a === 20) {
//       res('promise resolved');
//     } else {
//       reject('promise rejected');
//     }
//   }).then((data) => data);
// };

// promsiseDemo()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//function to implement Promises.All

const fetchAllPromises = (promises) => {
  const promiseArr = [];
  promises.forEach((promise) => {
    return new Promise((resolve, reject) => {
      if (promise) {
        promiseArr.push(resolve(promise));
      } else {
        promiseArr.push(reject(promise));
      }
    });
  });
};
