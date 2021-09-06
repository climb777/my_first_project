/*Задача 58.1

Дан следующий объект с работниками и их зарплатами:

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
Увеличьте зарплату каждого работника на 10%.*/
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
let objTen = {};
for(let key in obj) {
	objTen[key] = obj[key] + obj[key] * 0.1;
}
console.log(objTen);

/*Задача 58.2

Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.*/
let objTen400 = {};
for(let key in obj) {
	if(obj[key] <= 400) {
		objTen400[key] = obj[key] + obj[key] * 0.1;	
	}
	else {
		objTen400[key] = obj[key];
	}
}
console.log(objTen400);
/*Задача 58.3

Даны следующие массивы:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.*/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arrTotal = {};
for(let i = 0; i < arr1.length; i++) {
	arrTotal[arr1[i]] = arr2[i];
}
console.log(arrTotal);
/*Задача 58.4

Дан следующий объект:

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
Найдите сумму ключей этого объекта и поделите ее на сумму значений.*/
let obj3 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let keySum = 0;
let keyElem = 0;
for(let key in obj3) {
	keySum += Number(key);
	keyElem += obj3[key];
}
console.log(keySum + ' ' + keyElem + ' ' + keySum/keyElem);

/*Задача 58.5

Дан следующий объект:

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
Запишите ключи этого объекта в один массив, а значения - в другой.*/
let obj4 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keys = [];
let elem = [];
let i = 0;
for(let key in obj4) {
	
	keys[i] = key;
	elem[i] = obj4[key];
	i++;
}
console.log(keys + ' ' + elem);

/*Задача 58.6

Дан следующий объект:

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.

То есть у вас в результате получится вот такой массив:

let arr = [
	125,
	225,
	128,
	145,
	281,
];*/
let obj5 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let newArr = [];
i = 0;
for(let key in obj5) {
	// let str = String(obj5[key]);
	if(String(obj5[key])[0] == 1 || String(obj5[key])[0] == 2) {
		newArr[i] = obj5[key];
		i++;
	}
}
console.log(newArr);
//String(obj5[key])

/*Задача 58.7

Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};*/
let arr6 = ['a', 'b', 'c', 'd', 'e'];
let newObj = {};
i = 1;
for(let elem of arr6) {
	newObj[i] = elem;
	i++;
}
console.log(newObj);
/*Задача 58.8

Дан следующий массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Создайте из этого массива следующий объект:

let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};*/
let arr7 = ['a', 'b', 'c', 'd', 'e'];
let newObj1 = {};
i = 1;
for(let elem of arr7) {
	newObj1[elem] = i;
	i++;
}
console.log(newObj1);