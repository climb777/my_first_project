let str = 'london';
let result = str.slice(0, 1).toUpperCase() + str.slice(1);

/*Задача 1js.Pm.SM.Prm.1

Преобразуйте последнюю букву строки в верхний регистр.*/
console.log(result);
result = str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(result);

/*Задача 2js.Pm.SM.Prm.2

Преобразуйте первые 2 буквы строки в верхний регистр.*/
result = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result);

/*Задача 3js.Pm.SM.Prm.3

Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:

let str = 'London';
Преобразуйте первую букву строки в нижний регистр.*/
str = 'London';
result = str.slice(0, 1).toLowerCase() + str.slice(1);
console.log(result);

str = 'word1 word2 word3';
let words = str.split(' ');
console.log(words);
for(let i = 0; i < words.length; i++) {
	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
}
console.log(words);
result = words.join(' ');
console.log(result);

/*Задача 5js.Pm.SM.Prm.5

Преобразуйте строку 'var_test_text' в 'VarTestText'.

Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).*/
str = 'var_test_text';
let arr = str.split('_');
console.log(arr.join(''));

console.log(str.split('_').join(''));

for(let i = 0; i < arr.length; i++) {
	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
console.log(arr.join(''));
let arr1 = [1, 2, 3, 4, 5];
arr1 = arr1.reverse();
console.log(arr1);

/*Задача 7js.Pm.SM.Prm.7

Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.*/
str = 'Я люблю программировать на JavaScript';
console.log(str.split(' ').reverse().join(' '));