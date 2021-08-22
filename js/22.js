let test = 'abc';
if(test == 'abc') {
	console.log('верно');
}
else {
	console.log('неверно');
}

if ('3' == 3) {
	console.log('верно');
}
else {
	console.log('неверно');
}

if ('3' === 3) {
	console.log('верно');
}
else {
	console.log('неверно');
}

let a = '';
console.log(a);
console.log(typeof(a));
a = ' ';
console.log(a);
console.log(typeof(a));
a = '0';
console.log(a);
console.log(typeof(a));
a = '0';
console.log(typeof(Number(a)));