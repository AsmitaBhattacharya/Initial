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