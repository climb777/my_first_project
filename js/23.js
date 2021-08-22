let num = 3;
if(num > 0 && num < 10) {
	console.log('верно');
}
else {
	console.log('неверно');
}

let num1 = 3;
let num2 = 2;
if(num1 ==3 && num2 == 3) {
	console.log('верно');
}
else {
	console.log('неверно');
}
num1 = 1;
num2 = 3;
if(num1 <= 1 && num2 >= 3) {
	console.log('верно');
}
else {
	console.log('неверно');
}

num = 3;
if((num > 5 && num < 10) || num == 20) {
	console.log ('верно');
}
else {
	console.log('неверно');
}

if(num > 5 || (num > 0 && num <= 3)) {
	console.log('верно');
}
else {
	console.log('неверно');
}

if(num == 9 || (num > 10 && num < 20) || (num > 20 && num < 30)) {
	console.log('верно');
}
else {
	console.log('неверно');
}