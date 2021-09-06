/*Задача 1js.Pm.Md.MAI.1

Дан двухмерный массив с числами:

let arr = [[1, 2, 3], [4, 5], [6]];
С помощью вложенных циклов найдите сумму элементов этого массива.*/
/*let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for(let subArr of arr) {
	for(let elem of subArr) {
		sum += elem;
	}
}
console.log(sum);*/

/*Задача 2js.Pm.Md.MAI.2

Дан трехмерный массив с числами:

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
С помощью вложенных циклов найдите сумму элементов этого массива.*/
/*let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum1 = 0;
for(let subArr of arr1) {
	for(let subSubArr of subArr) {
		for(let elem of subSubArr) {
			sum1 += elem;
		}
	}
}
console.log(sum1);
*/
/*Задача 3js.Pm.Md.MAI.3

Решите предыдущие две задачи через цикл for.*/
/*let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
	for(let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log(sum);*/

let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
	for(let j = 0; j < arr[i].length; j++) {
		for(let k = 0; k < arr[i][j].length; k++) {
			sum += arr[i][j][k];
		}
	}
}
console.log(sum);