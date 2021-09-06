/*Задача 1js.Pm.UF.Pr.1

Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.*/
/*function sqCu(num) {
	document.write('Квадрат этого числа: ' + num * num + '<br>');
	document.write('Куб этог числа: ' + num * num * num + '<br>');
} 
sqCu(5);*/

/*Задача 2js.Pm.UF.Pr.2

Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.*/
/*function check(num) {
	if(num < 0) {
		document.write('Это число отрицательное');
	}
	else  if(num > 0) {
		document.write('Это число положительное');
	}
	else {
		document.write('Число равно нулю');
	}
}
check(0);*/

/*Задача 3js.Pm.UF.Pr.3

Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.*/
/*document.write('<br>');
function sum3(num1, num2, num3) {
	document.write(num1 + num2 + num3);
}
sum3(1, 2, 3);

function sumArr(arr) {
	let sum = 0;
	for( let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
let arr = [1, 3, 6, 7, 24];
console.log(sumArr(arr));*/

function name1(name = 'Аноним') {
	document.write('Ваше имя: ' + name);
}
name1();
function nameAge(name = 'Аноним', age = 'неизвестен') {
	document.write('<br>' + 'Ваше имя: ' + name + '<br>' + 'Ваш возраст: ' + age);
}
nameAge('СЕргей', 34);

