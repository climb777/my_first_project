/*Задача 1js.Pm.UF.CC.1

Сделайте функцию, выводящую на экран ваше имя.*/
function cons() {
	console.log('Я создал свою первую функцию');
}
cons();
function consScreen() {
	document.write('<br>' + 'Я создал свою первую функцию' + '<br>');
}
consScreen();
/*Задача 2js.Pm.UF.CC.2

Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.*/
function outNum() {
	for(let i = 1; i <= 100; i++) {
		document.write(i + '<br>')
	}
}
outNum();