/*Задача 9.1

Дана переменная a со значением '10' и переменная b со значением '20'. Сложите данные переменные как числа.*/
let a = '10';
let b = '20';
console.log(Number(a) + Number(b));
console.log(a + b);

/*Задача 9.3

Не запуская код, определите, что выведется на экран:

alert( 2 + Number('3') );*/
console.log(2 + Number('3'));

/*Задача 9.4

Не запуская код, определите, что выведется на экран:

alert( '2' + Number('3') );*/
console.log('2' + Number('3'));

let c = '2' * 1;
let d = +'2';
console.log(c + d);
console.log(+a + +b);

/*parseInt   parseFloat*/
let n = parseInt('36km');
console.log(n);
let n2 = '47px';
console.log(parseInt(n2));
let n3 = '24.8cm';
let n4 = '158 m';
console.log(parseFloat(n3) + ' ' + parseFloat(n4));

/*Задача 9.6

Дана переменная со значением 5px и переменная со значением 6px. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.*/
let p1 = '5px';
let p2 = '6px';
console.log(parseInt(p1) + parseInt(p2));

/*Задача 9.7

Дана переменная со значением 5.5px и переменная со значением 6.25px. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.*/
let p3 = '5.5px';
let p4 = '6.25px';
console.log (parseFloat(p3) + parseFloat(p4));

/*Задача 9.8

Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'. То есть, если наша сумма равна 11.75, то на экран пусть выведется 11.75px.*/
console.log (parseFloat(p3) + parseFloat(p4) + 'px');

/*Преобразование к строке String*/

let q1 = 246;
let q2 = 798;
console.log(String(q1) + String(q2));

/*Применение преобразования к строке*/

let num = 12345678;
let str = String(num);
console.log(str + ' длина строки из чисел ' + str.length);
console.log('Можно и так');
console.log(String(num).length + ' Другая запись');

/*Задача 9.11

Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.
*/

let w1 = 23458;
let w2 = 583904;
console.log(String(w1).length + String(w2).length);