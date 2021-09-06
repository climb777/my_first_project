/*Задача 64.1

Выведите с помощью цикла столбец чисел от 1 до 100.*/
/*for(let i = 1; i <= 100; i++) {
	document.write(i + '<br>');}*/


/*Задача 64.2

Выведите с помощью цикла столбец чисел от 100 до 1.*/
/*for(let i = 100; i >= 0; i--) {
	document.write(i + '<br>');
}*/

/*Задача 64.3

Выведите с помощью цикла столбец четных чисел от 1 до 100.*/
/*for(let i = 1; i <= 100; i++) {
	if(i % 2 == 0) {
		document.write(i + '<br>');
	}
}*/

/*Задача 64.4

Заполните массив 10-ю иксами с помощью цикла.*/
/*let arr = [];
for(let i = 0; i < 10; i++) {
	arr[i] = 'x';
}
console.log(arr);*/
/*Задача 64.5

Заполните массив числами от 1 до 10 с помощью цикла.*/
/*let arr = [];
for(let i = 1; i <= 20; i++) {
	arr[i - 1] = i;
}
console.log(arr);

let arr1 = [];
let k = 1;
while(k <= 15) {
	arr1[k - 1] = k;
	k++;
}
console.log(arr1);
*/
/*Задача 64.6

Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.*/
/*for(let i = 0; i < arr.length; i++) {
	if(arr[i] > 0 && arr[i] < 10) {
		console.log(arr[i]);
	}
}*/
/*Задача 64.7

Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.*/
/*for(let i = 0; i < arr.length; i++) {
	if(arr[i] == 5) {
		console.log('Есть');
		break;
	}
}
*/
/*Задача 64.8

Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.*/
/*let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum);
*//*Задача 64.9

Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.*/
/*let sum1 = 0;
for (let i = 0; i < arr.length; i++) {
	sum1 += (arr[i] ** 2);
}
console.log(sum1);
*/
/*Задача 64.10

Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).*/
/*sum = 0;
let i;
for(i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum);
console.log(i);
console.log(sum/(i + 1));
*//*Задача 64.11

Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.*/
/*let num = 5;
let fuctorial = 1;
for (let i = 1; i <= num; i++) {
	fuctorial *= i;
}
console.log(fuctorial);

let fuctorial1 = 1;
let j = 1;
while(j <= num) {
	fuctorial1 *= j;
	j++;
}
console.log(fuctorial1);*/
let r = 15;
const PI = 3.14;
console.log(2 * PI * r);

let obj = {a: 1, b: 2, c: 3};
console.log('b' in obj);
console.log('f' in obj);
delete obj.b;
console.log(obj);
console.log('b' in obj);

/*Задача 2js.Pm.Cl.OD.2

Дан массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.*/
let arr = ['a', 'b', 'c', 'd', 'e'];
for(let i = 0; i < arr.length; i++) {
	if((i + 1) % 2 != 0) {
		delete arr[i];
	}
}
console.log(arr);
console.log(arr.length);
const obj1 = {x: 1, y: 2, z: 3};
obj1.z +=2;
console.log(obj1);

const arr1 = [1, 2, 3, 4, 5];
const res = arr1[1] + arr1[2];

console.log(res);