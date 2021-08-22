console.log(typeof{});
console.log(typeof[]);
/*number, string, boolean, undefined, null, symbol*/
console.log(typeof{a: 1, b: 2, c: 3});
console.log(typeof[1, 2, 3]);
let arr = [1, 2, 3];
console.log(typeof arr);
console.log(typeof arr[0]);
arr = ['1', '2', '3'];
console.log(typeof arr[0]);

console.log(Array.isArray([1, 2, 3]));
console.log( Array.isArray({a: 1, b: 2, c: 3}));

