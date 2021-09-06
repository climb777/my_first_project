/*Задача 1js.Pm.Md.MSI.1

Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран данные каждого работника в формате имя - зарплата.*/
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for(let elem of employees) {
	document.write(elem.name + ' ' + elem.salary + '<br>');
}
/*Задача 2js.Pm.Md.MSI.2

Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
Выведите на экран сумму зарплат всех работников.*/
let employees1 = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let sumSalary = 0;
for(let elem of employees1) {
	sumSalary += elem.salary;
}
document.write('Сумма зарплат все работников: ' + sumSalary + '<br>');

/*Задача 3js.Pm.Md.MSI.3

Дан следующий массив работников:

let employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.*/
let employees2 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sumSalaryOld = 0;
for(let elem of employees2) {
	if(elem.age >= 30) {
		sumSalaryOld += elem.salary;
	}
}
document.write('Сумма зарплат все работников, возраст которых равен или более 30: ' + sumSalaryOld + '<br>');
/*Задача 4js.Pm.Md.MSI.4

Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет (true - уволен):

let employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];
Выведите на экран имена и зарплаты неуволенных работников.*/
let employees3 = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];
document.write('Имена и зарплаты неуволенных работников: ' + '<br>');
for(let elem of employees3) {
	if(!elem.dismissed) {
		document.write(elem.name + ' ' + elem.salary  + '<br>');
	}
}
/*Задача 5js.Pm.Md.MSI.5

Дана следующая структура с данными:

let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};

С помощью вложенных циклов выведите на экран все строки с данными.*/
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};
document.write('Данные:' + '<br>');
for(let group in data) {
	for(let point of data[group]) {
		document.write(point + '<br>');
	}
}
/*Задача 6js.Pm.Md.MSI.6

Дана следующая структура с данными:

let data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];
Количество объектов в массиве и количество элементов в объекте может быть произвольным. С помощью вложенных циклов выведите на экран все строки с данными.*/
document.write('<br>' + 'Данные 1:' + '<br>');
let data1 = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];
for(let obj of data1) {
	for(let key in obj) {
		document.write(key + ': ' + obj[key] + '<br>');
	}
}
/*Задача 7js.Pm.Md.MSI.7

Дана следующая структура с данными:

let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];
С помощью вложенных циклов выведите на экран все строки с данными.*/
let data2 = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
			'data224',
		],
		3: [
			'data231',
			'data232',
			'data233',
			'data234',
			'data235',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
		],
	},
];
document.write('<br>' + 'Данные2: ' + '<br>');
for(let obj of data2) {
	for(let keyArr in obj) {
		document.write(keyArr + ': ' + '<br>');
		for(let str of obj[keyArr]) {
			document.write(str + '<br>');
		}

	}
}