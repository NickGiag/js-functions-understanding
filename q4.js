function myFunction(num) {
    return num-1
  }
  
let num = 10
let add = 3
add = myFunction(add)
add = myFunction(add)

console.log(add);
console.log(num);

// expected 1 , 10
// returned 1, 10