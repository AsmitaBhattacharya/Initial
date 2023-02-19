function quickSort(arr) { 
    if (arr.length < 2) {
      return arr;
    }
    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < arr.length - 1; i = i + 1) {
  
      if (arr[i] < pivot) leftArr.push(arr[i]);
      else rightArr.push(arr[i]);
      
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  }
  
  console.log("Sort this array with bubble sort: ", quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log("Sort this array with bubble sort: ", quickSort([1, 25, 31, -24, 53, 6, 57, 18, 94]));
  console.log("Sort this array with bubble sort: ", quickSort([91, -2, 43, 14, -85, 63, 47, -48, 19]));
  console.log("Sort this array with bubble sort: ", quickSort([1, -42, 33, 42, 53, 16, 37, -8, -39]));
  console.log("Sort this array with bubble sort: ", quickSort([41, -42, 13, 84, 45, -96, -37, 18, 9]));
  
  
  //worst case = O(n^2) if the array is already sorted but that shuld not be the assumed case
  // avg case O(nlogn) has one loop and inside the length is traversing half for every loop