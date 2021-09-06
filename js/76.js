/*Задача 1js.Pm.Md.MS.1

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
Выведите на экран сумму зарплат первого и второго работников.*/
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

console.log(employees[0]['salary'] + employees[1]['salary']);

/*Задача 2js.Pm.Md.MS.2

Дан следующий объект со студентами:

let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
Выведите на экран элемент 'Вася' и элемент 'Лена'.*/
let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students.boys[1] + ' ' + students['girls'][2]);