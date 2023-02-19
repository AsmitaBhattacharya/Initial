function insertionSort(arr) {   
    for (let i = 1; i < arr.length; i = i + 1) {
      let numberToInsert = arr[i];
      let j = i - 1; // j = index of sorted array
      while (j >= 0  && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = numberToInsert;
    }
    return arr;
  }
  
  console.log("Sort this array with bubble sort: ", insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log("Sort this array with bubble sort: ", insertionSort([1, 25, 31, -24, 53, 6, 57, 18, 94]));
  console.log("Sort this array with bubble sort: ", insertionSort([91, -2, 43, 14, -85, 63, 47, -48, 19]));
  console.log("Sort this array with bubble sort: ", insertionSort([1, -42, 33, 42, 53, 16, 37, -8, -39]));
  console.log("Sort this array with bubble sort: ", insertionSort([41, -42, 13, 84, 45, -96, -37, 18, 9]));
  
  
  //Big-O = O(n^2) 