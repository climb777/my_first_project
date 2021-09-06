/*Задача 1js.Pm.UF.Ex.1

Напишите функцию, которая будет находить сумму квадратов элементов массива.*/
function sumSqrt(arr) {
	let sum = 0;
	for(let elem of arr) {
		sum += (elem * elem);
	}
	return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(sumSqrt(arr));

/*Задача 2js.Pm.UF.Ex.2

Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.*/
function getDigitsSum(num) {
	let arr = String(num).split('');
	let sum = 0;
	for(let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}
console.log(getDigitsSum(345));

/*Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:

[1, 2, 3, 4, 6, 8, 12, 24]*/
function getDivisors(num) {
	let arr = [];
	for(let i = 1; i <= num; i++)
		if(num % i == 0) {
			arr.push(i);
		}
		return arr;
}
console.log(getDivisors(2100));

/*Задача 4js.Pm.UF.Ex.4

Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.*/
let str = 'abcdefg';
function reverseStr(str) {
	let arr = str.split('');

	
	return (arr.reverse()).join('');
}
console.log(reverseStr(str));

/*Задача 5js.Pm.UF.Ex.5

Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.*/
function delElem(num, arr) {
	let arr1 = [];
	for(let elem of arr) {
		if(elem != num) {
			arr1.push(elem);
		}
	}
	return arr1;
}
arr = [1, 2, 3, 4, 3, 2, 5, 3, 6, 7, 3];
console.log(delElem(3, arr));

/*Задача 6js.Pm.UF.Ex.6

Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:

console.log(func(5)); // выведет [1, 2, 3, 4, 5]*/
function fill(num) {
	let arr = [];
	for(let i = 0; i < num; i++) {
		arr.push(i + 1);
	}
	return arr;
}
console.log(fill(100));

/*Задача 7js.Pm.UF.Ex.7

Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:

console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]*/
function fillNum(numStart, numEnd) {
	let arr = [];
	for(let i = 0; i <= numEnd - numStart; i++) {
		arr.push(numStart + i);
	}
	return arr;
}
console.log(fillNum(10, 15));