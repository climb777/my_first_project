/*Задача 61.1

Разберите мое решение описанной задачи, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.*/
let one = 0;
let two = 1;
for(let i = 1; i <= 10; i++) {
	let current = one + two;
	one = two;
	two = current;
	console.log(current);
}
/*Задача 61.2

Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.*/
console.log('\n');
let three = 2;
for(let i = 1; i <= 10; i++) {
	let current = one + two + three;
	one = two;
	two = three;
	three = current;
	console.log(current);

}