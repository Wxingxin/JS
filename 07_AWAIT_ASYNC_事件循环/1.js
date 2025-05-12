// // fun 1
// async function foo1() {
//   console.log('foo')
// }

// const { Children } = require("react");

// // fun 2
// const foo2 = async function () {
//   console.log('foo2')
// }
// // fun 3
// const foo3 = async () => {
//   console.log('foo3')
// }

// // fun 4
// class Person{
//   async foo5() {
//     console.log('foo5')
//   }
// }


// setTimeout(() => {
//   console.log('settimeout 0')
// }, 0);
// setTimeout(() => {
//   console.log('settimeout 1')
// }, 0);

// console.log('11111')

// new Promise((resolve, reject) => {
//   console.log(222222)
//   console.log('----1')
//   console.log('----2')
//   resolve()
//   console.log('----3')
// }).then(res=> {
//   console.log('then 传入的回答： res: ',res)
// })
// console.log('333333')
// console.log('script end')


// console.log('script start')
// setTimeout(() => {
//   console.log('setTimeout 1')
//   new Promise(function (resolve) {
//     resolve()
//   }).then(() => {
//     new Promise(function (resolve){
//       resolve()
//     }).then(function () {
//       console.log('then 4')
//     })
//     console.log('then 2')
//   })
// });

// new Promise(function (resolve){
//   console.log('promise 1')
//   resolve()
// }).then(function (){
//   console.log('then 1')
// })

// setTimeout(function () {
//   console.log('setTimeout 2')
// })

// console.log(2)

// queueMicrotask(() => {
//   console.log('queueMicrotask 1')
// })

// new Promise(function (resolve){
//   resolve()
// }).then(function(){
//   console.log('then 3')
// })

// console.log('script end')


// console.log('script start')

// function requestData(url) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('setTimeout')
//       resolve(url)
//     }, 2000);
//   })
// }

// function getData() {
//   console.log('getData start')
//   requestData('why').then(res=>{
//     console.log('then1-res:', res)
//   })
//   console.log('getData end')
// }

// getData()
// console.log('script end')

// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }

// async function async2() {
//   console.log('async2')
// }

// console.log('script start')

// setTimeout(() => {
//   console.log('setTimeout')
// }, 0);

// async1()

// new Promise (function(resolve){
//   console.log('promise 1')
//   resolve()
// }).then(function(){
//   console.log('promise 2')
// })

// console.log('script end')


console.log('script start')

function requestData(url){
  console.log('requestData')
  return new Promise((resolve)=> {
    setTimeout(() => {
      console.log('setTimeout')
      resolve(url)
    }, 2000);
  })
}

async function getData() {
  console.log('getData start')
  const res = await requestData('why')
  console.log('then1-res:', res)
  console.log('getData end')
}

getData()
console.log('script end')