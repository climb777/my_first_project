/*Задача 1js.Pm.SM.Mth.1

Возведите 2 в 10 степень.*/
console.log(Math.pow(2, 10));

/*Задача 2js.Pm.SM.Mth.2

Найдите квадратный корень из 245.*/
console.log (Math.sqrt(245));

/*Задача 3js.Pm.SM.Mth.3

Дан следующий массив:

[4, 2, 5, 19, 13, 0, 10]
Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/
let arr = [4, 2, 5, 19, 13, 0, 10];
let sumCube = 0;
for(let elem of arr) {
	sumCube += Math.pow(elem, 3);
}
console.log(Math.sqrt(sumCube));
console.log(Math.round(Math.sqrt(sumCube)));

/*Задача 4js.Pm.SM.Mth.4

Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.*/
let num = Math.sqrt(379);
console.log(num);
console.log(Math.round(num));
console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(3));

/*Задача 5js.Pm.SM.Mth.5

Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.*/
let num1 = Math.sqrt(587);
console.log(num1);
console.log(Math.ceil(num1));
console.log(Math.floor(num1));
let obj = {'floor': Math.floor(num1), 'ceil': Math.ceil(num1)};
console.log(obj);

/*Задача 6js.Pm.SM.Mth.6

Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.*/
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

/*Задача 7js.Pm.SM.Mth.7

Выведите на экран случайное целое число от 1 до 100.*/
console.log(Math.random());
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(10, 100));

/*Задача 8js.Pm.SM.Mth.8

С помощью цикла заполните массив 10-ю случайными целыми числами.*/
let arr1 = [];
for(let i = 0; i < 10; i++) {
	arr1.push(getRandomInt(10, 100));
}
console.log(arr1);

let arr2 = [4, -2, 5, 19, -130, 0, 10];
let arr3 = [];
for(let i = 0; i < arr.length; i++) {
	arr3[i] = Math.abs(arr2[i]);
}
console.log(arr2);
console.log(arr3);

let a = 7;
let b = 9;
console.log(Math.abs(a - b));