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

new Promise((resolve, reject) => {
  reject();
}).catch((err) => console.log("code is err"));
