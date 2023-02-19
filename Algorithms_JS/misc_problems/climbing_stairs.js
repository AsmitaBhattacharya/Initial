function climbingStaircase(stairs) {
    const numberOfWays = [1, 2];
    
    for (let i = 2; i < stairs; i = i + 1) {
      numberOfWays[i] = numberOfWays[i-1] + numberOfWays[i-2];
    }
    
    return numberOfWays[stairs - 1];
  }
  
  console.log("The number of ways to climb the staircase is: ", climbingStaircase(67));
  console.log("The number of ways to climb the staircase is: ", climbingStaircase(34));
  console.log("The number of ways to climb the staircase is: ", climbingStaircase(5));
  console.log("The number of ways to climb the staircase is: ", climbingStaircase(33));
  
  // Another approach
  // function climbingStaircase(stairs) {
  //   if (stairs < 2) {
  //      return stairs; 
  //   } 
    
  //   return climbingStaircase(stairs-1) + climbingStaircase(stairs-2);
  // }
  
  
  // big-o = O(n) 