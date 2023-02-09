//Fibonacci series

function fib(n) {
    // const n = 5;
  
    // const a = 0;
    fib = [0, 1];
    // let b = 1;
    for (let i = 2; i < n; i = i + 1) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  
  }
  
  console.log("Fib Series: ", fib(9));
  
  //Big-O = O(n)