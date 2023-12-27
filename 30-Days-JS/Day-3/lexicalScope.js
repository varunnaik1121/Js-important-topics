function outer() {
  let a = 'varun';
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();
