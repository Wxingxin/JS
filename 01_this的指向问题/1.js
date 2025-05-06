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
// function foo() {
//   console.log('this:',this.name)
// }
// var bindFun = foo.bind({name: 'aaa'})
// bindFun.apply({name: 'bbb'})//aaa

// //先绑定apply
// function foo1() {
//   console.log('this:',this.name)
// }
//  foo1.apply({name: 'aaa'})
// var bindFun1 =  foo1.bind({name: 'bbb'})//aaa

// var obj = {
//   name: "obj",
//   foo: () => {
//     var bar = () => {
//       console.log("bar fun this:", this);
//     };
//     return bar;
//   },
// };
// var fn = obj.foo();
// fn.apply({ name: "gao" });

// var obj = {
//   name: "obj",
//   foo: function() {
//     // var _this = this
//     var bar = function() {
//       console.log("bar fun this:", this);
//     };
//     return bar;
//   },
// };
// var fn = obj.foo();
// fn.apply({ name: "gao" });
// //bar fun this: { name: 'gao' }

// var obj = {
//   name: "obj",
//   foo: function() {
//     var _this = this
//     var bar = function() {
//       console.log("bar fun this:", _this);
//     };
//     return bar;
//   },
// };
// var fn = obj.foo();
// fn.apply({ name: "gao" });
//bar fun this: { name: 'obj', foo: [Function: foo] }

// var name = 'window'

// var person = {
//   name: 'person',
//   sayName: function() {
//     console.log(this.name)
//   }
// }
// function sayName() {
//   var sss = person.sayName;
//   sss()//默认绑定  window -> window
//   person.sayName()//隐式绑定 person -> person
//   (person.sayName)()//隐式绑定 person -> person
//   (b = person.sayName)()//术语：间接函数引入 window -> window
// }
// sayName()

// var name = "window";

// var person1 = {
//   name: "person1",
//   foo1: function () {
//     console.log(this.name);
//   },
//   foo2: () => console.log(this.name),
//   foo3: function () {
//     return function () {
//       console.log(this.name);
//     };
//   },
//   foo4: function () {
//     return () => {
//       console.log(this.name);
//     };
//   },
// };

// var person2 = {name: 'person2'}

// person1.foo1() //隐式绑定 person1
// person1.foo1.call(person2)//显式绑定 person2

// person1.foo2()//上层作用域 window
// person1.foo2.call(person2)//上层作用域 window

// person1.foo3()()//默认绑定 window
// person1.foo3.call(person2)()//默认绑定 window
// person1.foo3().call(person2)//显式绑定 person2

// person1.foo4()()// person1
// person1.foo4.call(person2)()// person2
// person1.foo4().call(person2)// person1

// var name = "window";

// function Person(name) {
//   (this.name = name),
//     (this.foo1 = function () {
//       console.log(this.name);
//     }),
//     (this.foo2 = () => console.log(this.name)),
//     (this.foo3 = function () {
//       return function () {
//         console.log(this.name);
//       };
//     }),
//     (this.foo4 = function () {
//       return () => {
//         console.log(this.name);
//       };
//     });
// }

// var person1 = new Person("person1");
// var person2 = new Person("person2");


// person1.foo1() //隐式绑定 person1
// person1.foo1.call(person2)//显式绑定 person2

// person1.foo2()//上层作用域 person1
// person1.foo2.call(person2)//上层作用域 person1

// person1.foo3()()//默认绑定 window
// person1.foo3.call(person2)()//默认绑定 window
// person1.foo3().call(person2)//显式绑定 person2

// person1.foo4()()// 上层作用域查找：person1（隐式绑定）
// person1.foo4.call(person2)()//上层作用域查找：person2（显式绑定）
// person1.foo4().call(person2)// 上层作用域查找：person1（隐式绑定）


function Person(name){
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function() {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function() {
      return ()=> {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()//默认绑定：window
person1.obj.foo1.call(person2)()//默认绑定：window
person1.obj.foo1().call(person2)//绑定：person2

person1.obj.foo2()()//上层作用域查找：obj 隐式绑定
person1.obj.foo2.call(person2)()//上层作用域查找：person2 显式绑定
person1.obj.foo2().call(person2)//上层作用域查找：obj 隐式绑定


