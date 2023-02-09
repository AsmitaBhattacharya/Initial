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