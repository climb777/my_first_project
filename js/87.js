/*Задача 1js.Pm.UF.LO.1

Дана следующая функция:

function func(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории.*/
function func(a, b) {	
		return(a == b);
}
/*Задача 2js.Pm.UF.LO.2

Дана следующая функция:

function func1(a, b) {
	if (a != b) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории.*/
function func1(a, b) {
	return(a != b);
	}

/*Задача 3js.Pm.UF.LO.3

Дана следующая функция:

function func(a, b) {
	if (a + b >= 10) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории.*/
function func2(a, b) {
	return(a + b >= 10);
}
/*Задача 4js.Pm.UF.LO.4

Дана следующая функция:

function func(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}
Перепишите ее код в сокращенной форме согласно изученной теории.*/
function func3(num) {
	return(num >= 0);
}
console.log(func(3, 3));
console.log(func1(3, 2));
console.log(func2(4, 3));
console.log(func3(-3));