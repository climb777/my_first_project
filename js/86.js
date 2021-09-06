/*Задача 1js.Pm.UF.Fl.1

Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.*/
function honest(arr) {
	for(let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
	return true;
}
let arr = [1, 2, 3, 4, 5];
let arr1 = [2, 4, 6, 8, 12];
if(honest(arr1)) console.log('Все числа в массиве четные');
else console.log('В этом массиве есть нечетные числа');
/*Задача 2js.Pm.UF.Fl.2

Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.*/
function digitOdd(num) {
	let arr = String(num).split('');
	for(let elem of arr) {
		if(elem % 2 == 0) {
			return false;
		}
	}
	return true;
}
inputNum = 3597316;
if(digitOdd(inputNum)) console.log('Все цифры этого числа нечетные');
else console.log('В этом числе есть четные цифры');
/*Задача 3js.Pm.UF.Fl.3

Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.*/
function doubleElem(arr) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] == arr[i + 1]) {
			return false;
		}
	}
	return true;
}
arr = [1, 2, 2, 4, 5];
if(doubleElem(arr)) console.log('В этом массиве нет двух одинаковых элементов подряд');
else console.log('В этом массиве есть два одинаковых элемента подряд');