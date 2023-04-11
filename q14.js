function getSomeValue() {
    return 2
}
  
function myFunction(num1) {
    return getSomeValue() * getSomeValue()
}
  
const result = myFunction(5)

console.log(result);
// expected 4
// returned 4