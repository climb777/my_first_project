let test = true;
if(test == true) {
	console.log('верно');
}
else {
	console.log ('неверно');
}
test = false;
if(test == false){
	console.log ('верно');
}
else {
	console.log ('неверно');
}

/*Напомню вам значения, которые при приведению к логическому типу дают false: 0, -0, +0, null, false, NaN, undefined, '' (пустая строка).

*/
test = 3 * 'a';
console.log(test);
console.log (typeof(test));
if(test == true) {
	console.log ('верно');
}
else {
	console.log ('неверно');
}

test = true;
if(test) {
	console.log('верно');
}
else {
	console.log('неверно');
}

if(!test) {
	console.log('верно');
} else {
	console.log ('неверно');
}
test = 'abc';


let test1;
if(test1) {
	console.log('верно');
}
else {
	console.log ('неверно');
}
test = '0';
if(test) {
	console.log ('верно');
}
else {
	console.log ('неверно');
}
if(test)
	console.log('верно');