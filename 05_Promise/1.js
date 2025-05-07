const promise = new Promise((resolve, reject)=> {
  // resolve(99)
  reject(11)
})
promise.catch(err=>{
  console.log('is err')
  return 'wei'
}).then(val=> {
  console.log('val :', val)
})