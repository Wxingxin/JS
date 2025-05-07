// //main.js
// //导出 execCode函数
// function execCode(counter, successCallback, failureCallback) {
//   setTimeout(() => {
//     if (counter > 0) {
//       let tatal = 0;
//       successCallback(tatal);
//     } else {
//       failureCallback(`counter 有问题：${counter}`);
//     }
//   }, 3000);
// }

// //foo.js
// //引入 execCode函数
// execCode(
//   100,
//   (value) => {
//     console.log(`code running is OK ${value}`);
//   },
//   (err) => {
//     console.log(`code run is FAIL ${err}`);
//   }
// );

// new Promise((resolve, reject) => {
//   resolve(999);
// }).then(
//   (successValue) => {
//     console.log(`successValue is :${successValue}`);
//   },
//   (errorReason) => {
//     console.log(`error :${errorReason}`);
//   }
// );

// const promise = new Promise((resolve, reject) => {
//   resolve(99);
// });
// promise
//   .then(
//     (successValue) => {
//       console.log(`successValue is :${successValue}`);
//     },
//     (errorReason) => {
//       console.log(`error :${errorReason}`);
//     }
//   )
//   .then((val) => {
//     console.log("val", val);
//   })
//   .then((val) => {
//     console.log("val", val);
//   });

// //不使用promise resolve 的类方法
// const promise_1 = new Promise((resolve, reject)=> {
//   resolve(99)
// })
// promise_1.then(val=>
//   console.log(val)
// )

// //使用promise resolve 的类方法
// const promise_2 = Promise.resolve(99)
// promise_2.then(val=> console.log(val))

//不使用promise reject 的类方法
const promise_1 = new Promise((resolve, reject) => {
  reject(99);
});
promise_1.then(
  (val) => console.log(val),
  (err) => console.log(err)
);

//使用promise reject 的类方法
const promise_2 = Promise.reject(99);
promise_2.then(
  (val) => console.log(val),
  (err) => console.log(err)
);
