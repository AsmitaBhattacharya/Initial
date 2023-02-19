function mergeSort(arr) { 
    if (arr.length < 2) {
      return arr;
    }
    let leftArr = arr.slice(0, Math.floor(arr.length / 2));
    let rightArr = arr.slice(Math.floor(arr.length / 2));
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = [];
    while(leftArr.length && rightArr.length) {
      // shift() deletes the first element from the array
      if(leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift()); // as the element need to be deleted from the leftArr as well so shift used
      } else {
        sortedArr.push(rightArr.shift()); // as the element need to be deleted from the rightArr as well so shift used
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }
  
  console.log("Sort this array with merge sort: ", mergeSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log("Sort this array with merge sort: ", mergeSort([1, 25, 31, -24, 53, 6, 57, 18, 94]));
  console.log("Sort this array with merge sort: ", mergeSort([91, -2, 43, 14, -85, 63, 47, -48, 19]));
  console.log("Sort this array with merge sort: ", mergeSort([1, -42, 33, 42, 53, 16, 37, -8, -39]));
  console.log("Sort this array with merge sort: ", mergeSort([41, -42, 13, 84, 45, -96, -37, 18, 9]));
  
  
  //big-o = O(nlogn) the first half is a resursive and the elements are cutting down to half
  //                  second part is one loop
  // best in time complexity