/*Пусть у нас дан массив с числами. Решим следующую задачу: запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.*/
let arr = [34, 56, 74, 23, 59, 45, 49, 56, 23, 45, 78];
let result = [];
for(let elem of arr) {
	if(inRange(getSum(getDigit(elem)))) {
		result.push(elem);
	}
}
function getDigit(num) {
	return String(num).split('')
}
function getSum(arr) {
	let sum = 0;
	for(let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}
function inRange(num) {
	return num > 0 && num <= 9;
}
console.log(result);

