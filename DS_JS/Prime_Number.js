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