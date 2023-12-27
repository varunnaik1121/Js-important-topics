function test() {
  console.log('hello');
  setTimeout(() => {
    let promise = new Promise((res, rej) => {
      let name = 'varun';
      if (name == 'varun') {
        res('varun');
      } else {
        rej('name not match');
      }
    });
    promise.then((data) => console.log(data));
  }, 0);
  setTimeout(() => {
    console.log('inside the setTimeout');
  }, 0);
}
test();
