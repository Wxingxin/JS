// //普通函数，独立调用
// function foo() {
//   console.log('foo this :', this)
// }
// foo()

// //定义在对象种，但是独立调用
// var obj ={
//   name: 'why',
//   bar: function () {
//     console.log('bar this:', this)
//   }
// }
// var baz = obj.bar
// baz()

// var obj1 = {
//   bar: function() {
//     console.log('obj1 bar this:', this)
//   }
// }
// function test(fu){
//   fun()
// }
// test(obj1.bar)

// function foo() {
//   console.log('foo this:', this)
// }
// var obj = {
//   name: 'why',
//   foo: foo
// }
// obj.foo()

// function foo2() {
//   console.log('foo2 this:', this)
// }
// var obj2 = {
//   name: 'obj2',
//   foo: foo
// }
// var obj3 = {
//   name: 'obj3',
//   obj2: obj2
// }
// obj3.obj2.foo()

// function foo() {
//   console.log("foo Function:", this);
//   this.name = "why";
// }
// new foo();

// function foo1() {
//   this.name = "why";
//   console.log("foo Function:", this);
//   return {name: 'gao', age: 22}
// }
// const bar = new foo1();
// console.log('---')
// console.log(bar);

function foo() {
  console.log('this: ',this)
}
foo()
foo.apply()
