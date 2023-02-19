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


  