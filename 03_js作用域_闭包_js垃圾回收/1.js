function foo() {
  let count = 10;
  return function bar() {
    count++;
    return count;
  };
}
const fooPro = foo();
console.log(fooPro());