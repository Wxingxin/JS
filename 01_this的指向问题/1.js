//普通函数，独立调用
function foo() {
  console.log('foo this :', this)
}
foo()

//定义在对象种，但是独立调用
var obj ={ 
  name: 'why',
  bar: function () {
    console.log('bar this:', this)
  }
}
var baz = obj.bar
baz()

var obj1 = {
  bar: function() {
    console.log('obj1 bar this:', this)
  }
}
function test(fu){
  fun()
}
test(obj1.bar)