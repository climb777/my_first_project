let num = 8;
let flag = true;
for (let i = 2; i < num; i++) {
	if(num % i == 0) {
		flag = false;
		break;
	}
}
if(flag == false) {
	console.log('Число составное');
}
else {
	console.log('Число простое');
}