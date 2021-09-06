/*Задача 1js.Pm.UF.PU.1

Дана функция, проверяющая числа на простоту:

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}
С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.*/
function isPrimeBand(num1, num2) {
	let arr = [];
	for(let i = num1; i <= num2; i++)
		if(isPrime(i)) {
			arr.push(i);
		}
		return arr;
}
function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	
	return true;
}
console.log(isPrimeBand(50, 200));
/*Задача 2js.Pm.UF.PU.2

Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:

function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}
С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.*/
function sumYear13(yearStart, yearEnd) {
	let arr = [];
	for(let i = yearStart; i <= yearEnd; i++) {
		if(getDigitsSum(i) == 13) {
			arr.push(i);
		}
	}
	return arr;
}
function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}
console.log(sumYear13(1, 2030));
/*Задача 3js.Pm.UF.PU.3

Пусть дан какой-то массив с числами, например, такой:

[123, 456, 789]
Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий:

[321, 654, 987]
Некий программист уже написал код, реализующий описанную задачу:

let nums = [123, 456, 789];

let result = [];
for (let num of nums) {
	result.push(String(num).split('').reverse().join(''));
}

console.log(result); // выведет [321, 654, 987]
Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.*/

let nums = [123, 456, 789];
let nums1 = [234, 24456, 24568, 6543];
function reverse(nums) {
	let result = [];
for (let num of nums) {
	result.push(String(num).split('').reverse().join(''));
	}
	return result;
}
console.log(reverse(nums));
console.log(reverse(nums1));

/*Задача 4js.Pm.UF.PU.4

Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:

let num1 = 234;
let num2 = 531;

let digits1 = String(num1).split('');
let digitsSum1 = 0;
for (let digit1 of digits1) {
	digitsSum1 += Number(digit1);
}

let digits2 = String(num1).split('');
let digitsSum2 = 0;
for (let digit2 of digits2) {
	digitsSum2 += Number(digit2);
}

if (digitsSum1 == digitsSum2) {
	alert('суммы цифр совпадают');
} else {
	alert('суммы цифр не совпадают');
}
В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.*/
function sumDigits(num) {
	let digits = String(num).split('');
	let digitsSum = 0;
for (let digit of digits) {
	digitsSum += Number(digit);
	}
	return digitsSum;
}
function sumDigitsDiff(num1, num2) {
	if(sumDigits(num1) == sumDigits(num2)) return true;
	else return false;
}
console.log(sumDigitsDiff(2466, 4256));


/*Задача 5js.Pm.UF.PU.5

Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:

let nums = [12, 24, 35, 14];

for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(num);
		}
	}
	
	return result;
}
Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.

Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки. После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.*/
nums = [12, 24, 35, 14];

for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}
function getDivisors(num) {
	let result = [];
	
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	
	return result;
}
