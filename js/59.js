/*Задача 59.1

Дан следующий массив:

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
Подсчитайте количество цифр 3 в этом массиве.*/
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let count = 0;
for(elem of arr) {
	if(elem == 3) {
		count++;
	}
}
console.log(count);

/*Задача 59.2

Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.*/
let countFor2 = 0;
let countFor3 = 0;
for(elem of arr) {
	if(elem == 2) {
		countFor2++;
	}
	else if(elem == 3) {
		countFor3++;
	}
}
console.log(countFor2 + ' ' + countFor3);


let arr1 = ['d', 'y', 'e', 'o', 'b', 'w', 'd', 'o', 'p', 'g', 's', 'f', 
'j', 'g'];
let counterArr = {};
for(elem of arr1) {
	if(counterArr[elem] === undefined) {
		counterArr[elem] = 1;
	}
	else {
		counterArr[elem]++;
	}
}
console.log(counterArr);