/*Задача 1js.Pm.Md.MA.1

Дан следующий массив:

let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.*/
/*let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2] + ' ' + arr[1][1] + ' ' + arr[2][0] + ' ' + arr[0][0]);*/
/*Задача 2js.Pm.Md.MA.2

Дан следующий массив:

let arr = [[1, 2], [3, 4], [5, 6]];
Обращаясь к каждому элементу массива найдите сумму всех его элементов.*/
/*let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
	for(let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
	}
}
console.log(sum);*/

/*Задача 3js.Pm.Md.MA.3

Дан следующий массив:

let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
Обращаясь к каждому элементу массива найдите сумму всех его элементов.*/
/*let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
	for(let j = 0; j < arr[i].length; j++) {
		for(let k = 0; k < arr[i][j].length; k++) {
			sum += arr[i][j][k];
		}
	}
}
console.log(sum);*/

/*Задача 4js.Pm.Md.MA.4

Дан следующий массив:

let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
Обращаясь к каждому элементу массива найдите сумму всех его элементов.*/
let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
	sum += arr[i];
	for(let j = 0; j < arr[i].length; j++) {
		sum += arr[i][j];
		for(let k = 0; k < arr[i][j].length; k++) {
			sum += arr[i][j][k];
			for(let k1 = 0; k1 < arr[i][j][k].length; k1++) {			 
				sum += arr[i][j][k][k1];
			}
			
		}
	}
}
console.log(sum);

console.log(arr);
console.log(arr[0][3][2][0]);