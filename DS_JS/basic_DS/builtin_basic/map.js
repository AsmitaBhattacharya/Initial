/**
 *              Objects                                                       Map
 * Unordered                                                ordered
 * keys can be string/symbol types only                     Keys can be of any type
 * has few defauls keys                                     no default key
 * non iterable                                             iterable
 * number of items needs to be determined manually          number of items needs to be determined manually
 * can attach functionality while storing data              can only store data
 * 
 */



const map = new Map([['a', '1'], ['b', '1']]);
map.set('c', '3'); // add new value
map.has('a'); // check a key
map.delete('c') // delete key
map.size // check size
map.clear() // all clear


for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
};