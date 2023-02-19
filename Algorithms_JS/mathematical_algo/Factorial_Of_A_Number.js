//Factorial of a number

function fact(n) {
    let fact = 1;
    for (let i = 2; i <= n; i = i + 1) {
    fact = fact * i;
    }
    return fact;
  }
  
  console.log("Factorial of 5 is: ", fact(5));
  
  //Big-O = O(n)