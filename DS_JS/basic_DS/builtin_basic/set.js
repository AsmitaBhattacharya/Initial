/**
 *          Set                                           Array
 * cant have duplicate values                   can have duplicate values
 * insertion order is not maintained            insertion order is maintained
 * search & delete is faster                    search & delete is slower
 */


const set = new Set([1, 2, 3])
set.add(4) //add a new value
set.add(4) //will ignore as a duplicate value
set.has(4) //check if exists: true
set.delete(3) // delete the particular value
set.clear() // clear all values
set.size() //return size of set

for(const item of set) {
    console.log(item)
}
