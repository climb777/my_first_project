/*let obj = {
	a: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	b: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	c: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
for(let key in obj) {
	let subObj = obj[key];
	for(let subKey in subObj) {
		console.log(key + ':' + subObj[subKey]);
	}
}*/

/*Задача 1js.Pm.Md.MOI.1

Дан следующий объект:

let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
Используя циклы, найдите сумму элементов этого объекта.*/
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
let sum = 0;
for(let key in obj) {
	let subObj = obj[key];
	for(let subKey in subObj) {
		sum += subObj[subKey];
	}
}
console.log(sum);