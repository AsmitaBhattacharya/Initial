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


  // Prime number: approach 1

  function isPrime(n) {
    for (let i = 2; i < n; i = i + 1) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
}

console.log("Is 5 a prime number: ", isPrime(121));

//Big-O = O(n^2)


// Prime number: approach 2

function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i = i + 1) {
      if(n % i === 0) {
        return false;
      }
    }
    return true;
}

console.log("Is 5 a prime number: ", isPrime(1));

//Big-O = O(sqrt(n))

// Is power of two

function isPowerOfTwo(n) {
    // isPowerOfTwo(1) = true (2^0)
    // isPowerOfTwo(2) = true (2^1)
    // isPowerOfTwo(5) = false
      if(n<1) {
        return false;
      }
      while (n > 1) {
        if(n%2 !== 0) {
          return false;
        }
        n = n/2;
      }
      return true;
  }
  
  console.log("Is 4 a power of two: ", isPowerOfTwo(1));
  
  //Big-O = O(log(n))



  // Is power of two: bitwise operator


  function isPowerOfTwoBitwise(n) {
    // isPowerOfTwo(1) = true (2^0)
    // isPowerOfTwo(2) = true (2^1)
    // isPowerOfTwo(5) = false
      if(n<1) {
        return false;
      }
      return (n & (n-1)) === 0;
  }
  
  console.log("Is 4 a power of two: ", isPowerOfTwo(1));
  
  //Big-O = O(1)



  // Recursive fibonacci series

  function recursiveFibonacciSeries(n) {
    if (n < 2) {
      return n;
    }
    return recursiveFibonacciSeries(n-1) + recursiveFibonacciSeries(n-2);
  }
  
  console.log("Element of fibonacci series in element 6: ", recursiveFibonacciSeries(6));
  
  //Big-O = O(2^n) as for every input initial calls are two


  // Recursive factorial of a number

  function recursiveFactorialNumber(n) {
    if (n === 0) {
      return 1;
    }
    return n * recursiveFactorialNumber(n-1);
  }
  
  console.log("Factorial of 6: ", recursiveFactorialNumber(6));
  
  //Big-O = O(n) as for every input initial calls are the number of i/p


  // Linear search algorithm

  function indexOfElement(arr, t) {
    for (let i = 0; i < arr.length; i = i + 1) {
      if (t === arr[i]) {
        return i;
      }
    }
    return -1;
  }
  
  console.log("Check the position of 6 in the arr: ", indexOfElement([1,2,3,4,5,6,7,8,9], 10));
  
  //Big-O = O(n) the number of time arr increases the if condition increases


  // Binary search algorithm

  function indexOfElementBinarySearch(arr, t) {
    let first = 0;
    let last = arr.length - 1;
    
  
    while (first <= last) {
      let arrMid = Math.floor((last + first)  / 2);
      if (t > arr[arrMid]) {
        first = arrMid + 1;
      } else if (t < arr[arrMid]) {
        last = arrMid - 1;
      } 
      if (t === arr[arrMid]) {
        return arrMid;
      }
    }
    return -1;
  }
  
  console.log("Check the position of 6 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
  console.log("Check the position of 10 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
  console.log("Check the position of 0 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
  console.log("Check the position of 1 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
  console.log("Check the position of 9 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
  //Big-O = O(logn) // for every operation n decreases but not in same amount 


  // Binary search algorithm with recursion


  function indexOfElementBinarySearch(arr, t) {
    return searchIndex(arr, t, 0, arr.length - 1);
  }
  
  function searchIndex (arr, t, first, last) {
    if (first > last) {
      return -1;
    }
    let arrMid = Math.floor((last + first)  / 2);
    if (t === arr[arrMid]) {
      return arrMid;
    }
    if (t < arr[arrMid]) {
      return searchIndex(arr, t, first, arrMid - 1);
    } else {
      return searchIndex(arr, t, arrMid + 1, last);
    } 
    
    
  }
  
  console.log("Check the position of 6 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
  console.log("Check the position of 10 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
  console.log("Check the position of 0 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
  console.log("Check the position of 1 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
  console.log("Check the position of 9 in the arr: ", indexOfElementBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
  //Big-O = O(logn) 