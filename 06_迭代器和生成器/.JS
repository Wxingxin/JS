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

const obj = {
  //可以看作通用的可迭代对象
  names: ["why", "gao", "wei"],
  [Symbol.iterator]: function () {
    let index = 0;
    const objIntertor = {
      next:  () => {
        //把 name 改为 this。当obj调用它时会有隐式绑定
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
    return objIntertor
  },
};
const iterator = obj[Symbol.iterator]()
console.log(iterator.next());