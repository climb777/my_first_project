let arr = [];
for(let i = 0; i < 100; i++) {
	arr[i] = i + 1;
}
console.log(arr);

arr = [];
console.log(arr);
for(let i = 2; i < 100; i +=2) {
	arr[i - 1] = i;
}
console.log(arr);

let arr1 = [];
for(let i = 1, j = 0; i <= 99; i += 2, j++) {
	arr1[j] = i;
}
console.log(arr1);