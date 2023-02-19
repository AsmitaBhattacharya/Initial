const obj = {
    name: 'Bruce',
    age: 25,
    sayMyName: function() {
        console.log('Bruce');
    }
}

obj.hobby = 'football';
delete obj.hobby;

console.log(obj.name)
console.log(obj['age']) // if the key name has - or space
obj.sayMyName();

//Object.keys(), Object.values(), Object.entries()

//time complexity:

// insert/remove/access: O(1)
// Object.keys()/ Object.values()/ Object.entries()/ search: O(n)