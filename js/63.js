/*Давайте заполним массив следующим образом: в первый элемент запишем 'x', во второй 'xx', в третий 'xxx' и так далее.

Задача аналогична пирамидке, разница в том, что мы не будем выводить формируемую строку на экран, а будем записывать ее в массив*/
/*let arr = [];

for(let i = 0; i < 5; i++) {
	let str = '';
	for(let j = 0; j <= i; j++) {
		str += 'x';
	}
	arr[i] = str;
}
console.log(arr);*/
/*let arr = [];
let str = '';
for(i = 0; i < 5; i++) {
	str += 'x';
	arr.push(str);
}
console.log(arr);
*/
/*Задача 63.1

С помощью цикла сформируйте следующий массив:

['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']*/
/*let arr1 = [];
let str1 = '';
for(let i = 0; i < 5; i++) {
	str1 += 'xx';
	arr1.push(str1);
}
console.log(arr1);
*/
/*Давайте теперь заполним массив следующим образом: в первый элемент запишем '1', во второй '22', в третий '333' и так далее.

Данная задача также аналогична пирамидке.*/
/*let arr = [];
for(let i = 1; i < 10; i++) {
	let str = '';
	for(let j = 1; j <= i; j++) {
		str += i;
	}
	arr[i - 1] = str;
}
console.log(arr);*/
/*let arr = [];
for (let i = 1; i < 10; i++) {
	let str = '';
	for(let j = 1; j <= i; j++) {
		str += i;
	}
	arr.push(str);
}
console.log(arr);*/

/*Задача 63.2

С помощью цикла сформируйте следующий массив:

['11111', '22222', '33333', '44444', '55555']*/
let arr = [];
for(let i = 1; i <= 5; i++) {
	let str = '';
	for (let j = 0; j < 5; j++) {
		str += i;
	}
	arr.push(str);
}
console.log(arr);