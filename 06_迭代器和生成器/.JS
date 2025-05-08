// function createArrayInterator(array) {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < array.length) {
//         return { done: false, value: array[index++] };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

// const obj = {
//   names: ["why", "gao", "wei"],
// };

// let index = 0;
// const objIntertor = {
//   next: function () {
//     if (index < obj.names.length) {
//       return { done: false, value: obj.names[index++] };
//     } else {
//       return { done: true, value: undefined };
//     }
//   },
// };
// const value1 = objIntertor.next()
// console.log(value1)

// const obj = {
//   names: ["why", "gao", "wei"],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     const objIntertor = {
//       next: function () {
//         if (index < obj.names.length) {
//           return { done: false, value: obj.names[index++] };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//     return objIntertor
//   },
// };
// const iterator = obj[Symbol.iterator]()
// console.log(iterator.next());

// const students = ["wei", "gao", "why"];
// const studentsItertor = students[Symbol.iterator]();
// const students1 = studentsItertor.next();
// const students2 = studentsItertor.next();
// const students3 = studentsItertor.next();
// const students4 = studentsItertor.next();
// console.log(students1, students2, students3, students4);

// const obj = {
//   //可以看作通用的可迭代对象
//   names: ["why", "gao", "wei"],
//   [Symbol.iterator]: function () {
//     let index = 0;
//     const objIntertor = {
//       next:  () => {
//         //把 name 改为 this。当obj调用它时会有隐式绑定
//         if (index < this.names.length) {
//           return { done: false, value: this.names[index++] };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//     return objIntertor
//   },
// };
// const iterator = obj[Symbol.iterator]()
// console.log(iterator.next());

// const infos = {
//   name: "gao",
//   age: 22,
//   height: 1.63,
//   [Symbol.iterator]: function () {
//     const entries = Object.entries(this);
//     let index = 0;
//     const iterator = {
//       next: function () {
//         if (index < entries.length) {
//           return { done: false, value: entries[index++] };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//     return iterator;
//   },
// };
// console.log(infos[Symbol.iterator]().next())

// class Person {
//   constructor(name, age, address, friends) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.friends = friends;
//   }
//   //实例方法
//   running() {}
//   [Symbol.iterator]() {
//     let index = 0;
//     const iterator = {
//       next: () => {
//         if (index < this.friends.length) {
//           return { done: false, value: this.friends[index++] };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//     return iterator;
//   }
// }

// const p1 = new Person('why', 18 ,1.88,['man', 'cxk'])
// const p2 = new Person('gao', 22 ,1.63,['shanghai', 'nantong'])

// for (const item of p2){
//   console.log(item)
// }


// class Person {
//   constructor(name, age, address, friends) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.friends = friends;
//   }
//   //实例方法
//   running() {}
//   [Symbol.iterator]() {
//     let index = 0;
//     const iterator = {
//       next: () => {
//         if (index < this.friends.length) {
//           return { done: false, value: this.friends[index++] };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//     return iterator;
//   }
// }

// const p1 = new Person('why', 18 ,1.88,['man', 'cxk'])
// const p2 = new Person('gao', 22 ,1.63,['shanghai', 'nantong'])

// for (const item of p2){
//   console.log(item)
// }

function* foo(){
  console.log('111')
  yield
  console.log(222)
  yield
  console.log(333)
}
const generator = foo()
console.log(generator.next())