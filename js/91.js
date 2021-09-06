function getOwnDivisors(num) {
	let arr = [];
	for(let i = 1; i < num; i++) {
		if(num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}
console.log(getOwnDivisors(220));

function getSum(arr) {
	let sum = 0;
	for(let elem of arr) {
		sum += elem;
	}
	return sum;
}
console.log(getSum(getOwnDivisors(220)));

function isFriendly(num1, num2) {
	return getSum(getOwnDivisors(num1)) == num2 && getSum(getOwnDivisors(num2)) == num1;
}
console.log(isFriendly(220, 284));

function getFriendly(numStart, numEnd) {
	let result= [];
	for(let i = numStart; i <= numEnd; i++) {
	if(isFriendly(i, getSum(getOwnDivisors(i)))) {
		if(i < getSum(getOwnDivisors(i))) {
		let arr = [];
		arr.push(i);
		arr.push(getSum(getOwnDivisors(i)));
		result.push(arr);
	}
	}
	}
	return result;
}
let arr = getFriendly(1, 3000);
for(let i = 0; i < arr.length; i++) {
 console.log(arr[i]);
 document.write(arr[i] + '<br>');
}

function getPerfect (numStart, numEnd) {
	let arr = [];
	for(let i = numStart; i <= numEnd; i++) {
		if(getSum(getOwnDivisors(i)) == i)
			arr.push(i);
	}
	return arr;
}
console.log(getPerfect(1, 1000));
/*Задача 6js.Pm.FP.FrNm.6

Сделайте функцию getSimpleDivisors, которая будет принимать параметром целое число и находить все делители этого числа, являющиеся простыми числами.*/
function isSimple(num) {
	for(let i = 2; i < num; i++) {
	if(num % i == 0)
		return false;
}
return true;
}

function getSimpleDivisors(num) {
	let arr = [];
	let divisors = getOwnDivisors(num);
	for(let i = 1; i < divisors.length; i++)
	if(isSimple(divisors[i])) {
		arr.push(divisors[i]);	
	}
	return arr;
}
console.log(getSimpleDivisors(300));