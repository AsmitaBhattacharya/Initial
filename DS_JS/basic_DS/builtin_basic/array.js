const arr = [1, 2, 3, 'Asmita', 'Cat'];
arr.push(4); // add last element
arr.unshift(0); // add first element
arr.pop(); // removes last element
arr.shift(); // remove last element

for(const item of arr) {
    console.log(item); // 1, 2, 3, 'Asmita', 'Cat'
}



// other methods: map, filter, reduce, concat, slice, splice

// time complexity:

//insert/remove from end - O(1)
//insert/ remove from beginning - O(n) as the index need to set
//access- O(1)
//search - O(n) can be at the end
// push/ pop - O(1)
// shift/unshift/concat/slice/splice/forEach/map/reduce - O(n)