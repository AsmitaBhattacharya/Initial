function towerOfHanoi(numberOfDisk, fromRod, toRod, usingRod) {
    if (numberOfDisk === 1) {
      console.log(`Move disk ${numberOfDisk} from ${fromRod} to ${toRod}`);
      return;
    }
    towerOfHanoi(numberOfDisk-1, fromRod, usingRod, toRod);
    console.log(`Move disk ${numberOfDisk} from ${fromRod} to ${toRod} using ${usingRod}`);
    towerOfHanoi(numberOfDisk-1, usingRod, toRod, fromRod);
  }
  
  console.log("Ways for setting the tower of hanoi: ", towerOfHanoi(3, 'A', 'C', 'B'));
  // console.log("Ways for setting the tower of hanoi: ", towerOfHanoi(2, 'A', 'C', 'B'));
  // console.log("Ways for setting the tower of hanoi: ", towerOfHanoi(8, 'A', 'C', 'B'));
  // console.log("Ways for setting the tower of hanoi: ", towerOfHanoi(5, 'A', 'C', 'B'));
  
  
  
  // big-o = O(2^n - 1) ~ O(2^n) 