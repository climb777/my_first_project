/*Задача 1js.Pm.UF.Rt.1

Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.*/
function cube(num) {
	return(num * num * num);
}
let result = cube(3);
console.log(result);

/*Задача 2js.Pm.UF.Rt.2

Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.*/
function sqrt(num) {
	return Math.sqrt(num);
}
console.log(sqrt(3) + sqrt(4));
/*Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.*/
function round (num) {
	return num.toFixed(3);
}
console.log(round(sqrt(2)));
/*Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.*/
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(result);

/*Задача 10js.Pm.UF.Rt.10

Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.*/
function chast(num) {
	let i = 0;
	while(true) {
		num /= 2;
		i++;
		if(num < 10) return i;
	}
}
console.log(chast(200));

/*Задача 11js.Pm.UF.Rt.11

Дана следующая функция:

function func(num1, num2) {
	let result;
	
	if (num1 > 0 && num2 > 0) {
		result = num1 * num2;
	} else {
		result = num1 - num2;
	}
	
	return result;
}

alert(func(3, 4));
Перепишите ее в сокращенной форме согласно изученной теории.*/
function func(num1, num2) {
	if(num1 > 0 && num2 > 0) {
		return num1 * num2;
	}
	else {
		return num1 - num2;
	}
}
console.log(func(-29, 34));