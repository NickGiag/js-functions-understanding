let counter = 1

function myFunction() {
  counter++
  return counter
}

myFunction()
const num = myFunction()

console.log(num);
// expected 3
// returned 3