let obj = {'Понедельник': 1, 'Вторник': 2, 'Среда': 3, 'Четверг': 4, 'Пятница': 5, 'Суббота': 6, 'Воскресенье': 7};
let obj1 = {};
obj1['Понедельник'] = 1; 
obj1['Вторник'] = 2; 
obj1['Среда'] = 3; 
obj1['Четверг'] = 4; 
obj1['Пятница'] = 5; 
obj1['Суббота'] = 6; 
obj1['Воскресенье'] = 7; 
console.log(obj1);

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj2 = {};
for(let i = 0; i < arr1.length; i++) {
	obj2[arr1[i]] = arr2[i];
}
console.log(obj2);
let obj3 = {};
for(let i = 0; i < arr2.length; i++) {
	obj3[arr2[i]] = arr1[i];
}
console.log(obj3);
/*Задача 57.4

Дан объект:

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.*/
let obj4 = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let result = {};
for(let key in obj4) {
	if(obj4[key] >= 10 && obj4[key] <= 20) {
		result[key] = obj4[key];
	}
}
console.log(result);

/*Задача 57.5

Дан объект:

let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 
	7: 'вс'}; 
Запишите в новый объект дни недели, номера которых являются нечетными числами.*/
let obj5 = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 
	7: 'вс'}; 
	console.log(obj5);
let weekN = {};
for(let elem in obj5) {
	if(elem % 2 != 0) {
		weekN[elem] = obj5[elem];
	}
}	
console.log(weekN);

/*Задача 57.6

Дан объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.*/
let obj6 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
for(let key in obj6) {
	obj6[key] = obj6[key] ** 2;
}
console.log(obj6);
console.log(obj1);
let result5 = {};
for(let key in obj5) {
	result5[obj5[key]] = key;
}
console.log(result5);

let result6 = {};
for(let key in obj1) {
	result6[obj1[key]] = key;
}
console.log(result6);