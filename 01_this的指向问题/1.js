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

// function foo() {
//   console.log('this: ',this)
// }
// foo()
// foo.apply()

// function foo(name, age, address) {
//   console.log('foo:', this)
//   console.log('参数：', name, age, address)
// }
// var obj = {name: 'why'}

// var bar = foo.bind(obj, 'wei', 21)

// console.log(foo())//foo:全局 ||参数： undefined undefined undefinedundefined

// bar('zhengzhou')//foo: { name: 'why' } || 参数： wei 21 zhengzhou

// function foo() {
//   console.log('this name:',this.name)
// }
// var obj1 = {
//   name: 'why',
//   foo: foo
// }
// var obj2 = {
//   name: 'gao'
// }
// obj1.foo.apply(obj2)

// var obj = {
//   name: 'why',
//   foo: function() {
//     console.log('foo:',this.name)
//   }
// }
// var obj1 = {
//   name: 'gao'
// }
// const newObj =  new obj.foo()

//打印 aaa 说明bind的优先级高，
// 打印全局对象说明new的优先级高
// function foo() {
//   console.log('foo: ',foo)
// }
// var bindFn = foo.bind('aaa')
// new bindFn() //全局对象 说明是new的优先级高

//先绑定bind
function foo() {
  console.log('this:',this.name)
}
var bindFun = foo.bind({name: 'aaa'})
bindFun.apply({name: 'bbb'})//aaa

//先绑定apply
function foo1() {
  console.log('this:',this.name)
}
 foo1.apply({name: 'aaa'})
var bindFun1 =  foo1.bind({name: 'bbb'})//aaa