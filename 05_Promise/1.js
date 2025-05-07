const promise = new Promise((resolve, reject)=> {
  resolve(99)
})
promise.then(successValue=> {
  console.log(`successValue is :${successValue}`)
},errorReason=>{
  console.log(`error :${errorReason}`)
})
promise.then((val)=> {
  console.log('val',val)
})
promise.then((val)=>{
  console.log('val',val)
})