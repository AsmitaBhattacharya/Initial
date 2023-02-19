function bubbleSort(arr) {
    let swap = true;
    while (swap) {
      let swapHappened = 0;
      for (let i = 0; i < arr.length - 1; i = i + 1) {
        if (arr[i] > arr[i+1]) {
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
          swapHappened += 1
        }
      }
      if (swapHappened > 0) {
        swap = true;
      } else {
        swap = false;
      }
    }
    return arr;
  }
  
  console.log("Sort this array with bubble sort: ", bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  console.log("Sort this array with bubble sort: ", bubbleSort([1, 25, 31, -24, 53, 6, 57, 18, 94]));
  console.log("Sort this array with bubble sort: ", bubbleSort([91, -2, 43, 14, -85, 63, 47, -48, 19]));
  console.log("Sort this array with bubble sort: ", bubbleSort([1, -42, 33, 42, 53, 16, 37, -8, -39]));
  console.log("Sort this array with bubble sort: ", bubbleSort([41, -42, 13, 84, 45, -96, -37, 18, 9]));



  // big-o O(n^2) while loop and for loop

  // this algo also can be used with the do while loop as the 1st loop should always happen
