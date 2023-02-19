function cartesianProduct(arrA, arrB) {
    let cartProdArr = [];
    arrA.map((a) => {
      arrB.map((b) => {
        const tempArr = [a,b];
        cartProdArr.push(tempArr);
      });
    });
    return cartProdArr;
  }
  
  console.log("The Cartesian product of these two arrays: ", cartesianProduct([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 25, 31, -24, 53, 6, 57, 18, 94]));
  // console.log("Sort this array with merge sort: ", cartesianProduct([1, 25, 31, -24, 53, 6, 57, 18, 94]));
  console.log("The Cartesian product of these two arrays: ", cartesianProduct([91, -2, 43, 14, -85, 63, 47, -48, 19], [1, -42, 33, 42, 53, 16, 37, -8, -39]));
  // console.log("Sort this array with merge sort: ", cartesianProduct([1, -42, 33, 42, 53, 16, 37, -8, -39]));
  console.log("The Cartesian product of these two arrays: ", cartesianProduct([41, -42, 13, 84, 45, -96, -37, 18, 9], [41, -42, 13, 84, 45, -96, -37, 18, 9]));
  
  console.log("The Cartesian product of these two arrays: ", cartesianProduct([41, -42], [-96, -37, 18, 9]));
  
  
  //big-o = O(mn) as the length of the array is not same 