// fun 1
async function foo1() {
  console.log('foo')
}

// fun 2
const foo2 = async function () {
  console.log('foo2')
}
// fun 3
const foo3 = async () => {
  console.log('foo3')
}

// fun 4
class Person{
  async foo5() {
    console.log('foo5')
  }
}

