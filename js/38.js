/*Задача 38.1

Найдите произведение целых чисел от 1 до 20.*/
let result = 1;
for (let i = 1; i <= 20; i++) {
	result = result * i;
}
console.log(result);
/*Задача 38.2

Найдите сумму четных чисел от 2 до 100.*/
result = 0;
for(let i = 2; i <= 100; i +=2) {
	result = result + i;
}
console.log(result);

/*Задача 38.3

Найдите сумму нечетных чисел от 1 до 99.*/
result = 0;
for(let i = 1; i <= 100; i += 2) {
	result = result + i;
}
console.log(result);