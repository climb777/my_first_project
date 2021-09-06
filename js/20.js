let arr = [1, 2, 3];
let b = arr;
console.log(b);
b[0] = '!';
console.log(arr);
arr = 'primitive';
console.log(arr, b);

arr = [1, 2, 3];
b = arr;
arr = [4,5,6];
console.log(arr, b);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
console.log(arr2);

arr1 = [1, 3, 4];
arr2 = arr1;
arr1[0] = 'a';
arr2[1] = 'b';
console.log(arr1, arr2);

arr1 = [1, 3, 4];
arr2 = arr1;
arr1[0] = 'a';
arr2[0] = 'b';
console.log(arr1, arr2);