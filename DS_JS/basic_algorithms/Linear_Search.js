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