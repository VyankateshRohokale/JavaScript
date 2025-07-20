let arr = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
console.log(arr);

let typed_arr = new Uint8Array(10); // Create a typed array with space

// Convert characters to char codes
let codes = arr.map(char => char.charCodeAt(0)); // [104, 101, 108, 108, 111]

// Set values starting at index 1
typed_arr.set(codes, 1); 

console.log(typed_arr);
