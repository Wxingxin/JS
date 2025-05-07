//foo 可以看成特殊的对象
// function foo() {}
// foo.age =22
// console.log(foo.age) //22
// //foo函数的默认属性有 name：是函数的名字
// console.log(foo.name) //foo

// function test(name, age, address) {
//   console.log()
// }
// test('gao', 22, 'shanghai', 'happy')
// console.log(test.length)//3

// function foo(name, age, address) {
//   console.log(arguments);
//   let newArguments = [];
//   for (let args of foo.arguments) {
//     newArguments.push(args);
//     console.log(newArguments);
//   }
//   return newArguments;
// }
// console.log(foo(1, 2, 3, 4, 5));

// function foo(name, age, address) {
//   console.log(arguments);
//   let newArguments = Array.from(arguments)
//   return newArguments;
// }
// console.log(foo(1, 2, 3, 4, 5));

function foo(x, y, z) {
  return x + y + z;
}
console.log(foo(1, 2, 3))

function foo(x){
  return function(y) {
    return function(z){
      return  x + y + z 
    }
  }
}
console.log(foo(1)(2)(3))