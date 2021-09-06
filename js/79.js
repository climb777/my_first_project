/*Задача 1js.Pm.SM.St.1

Дана строка 'js'. Сделайте из нее строку 'JS'.*/
let str = 'js';
let str1 = str.toUpperCase();
console.log(str.toUpperCase());
/*Задача 2js.Pm.SM.St.2

Дана строка 'JS'. Сделайте из нее строку 'js'.*/
console.log (str1.toLowerCase());
/*Задача 3js.Pm.SM.St.3

Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).*/
str = 'я учу javascript!';
console.log (str.substr(2, 3));
console.log(str.substring(2, 5));
console.log (str.slice(6, -1));
/*Задача 4js.Pm.SM.St.4

Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.*/
str = 'abcde';
console.log(str.indexOf('c'));
/*Задача 5js.Pm.SM.St.5

Дана строка. Проверьте, есть ли в этой строке символ 'a'.*/
if(str.indexOf('f') >= 0) console.log('В этой строке есть этот символ');
else console.log('В этой строке нет этого символа');
/*Задача 6js.Pm.SM.St.6

Дана строка. Проверьте, начинается ли эта строка с символа 'a'.*/
if(str.indexOf('a') == 0) console.log('Эта строка начинается с этого символа');
else console.log('В начале этой строки стоит другой символ');
/*Задача 7js.Pm.SM.St.7

Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.*/
console.log (str.slice(-1));
if(str.slice(-1) == 'e') console.log('Строка заканчивается этим символом');
else console.log('В окончании этой строки другой символ');
/*Задача 8js.Pm.SM.St.8

Дана строка. Проверьте, начинается ли эта строка на 'http://'.*/
str = 'http://nodejs.org.html';
if(str.substr(0, 6) == 'http://') console.log('Эта строка начинается с http://');
else console.log('В этой строке другое начало');
/*Задача 9js.Pm.SM.St.9

Дана строка. Проверьте, заканчивается ли эта строка на '.html'.*/
if(str.substr(-5) == '.html') console.log('Эта строка заканчивается .html');
else console.log('В этой строке другое окончание');

/*Задача 10js.Pm.SM.St.10

Дана строка. Проверьте, начинается ли эта строка на 'http://'.*/
/*Задача 11js.Pm.SM.St.11

Дана строка. Проверьте, заканчивается ли эта строка на '.html'.*/
if(str.startsWith('http://')) console.log('Эта строка начинается с http://');
else console.log('У этой строки другое начало');
if(str.endsWith('.html')) console.log('Эта строка заканчиватеся на .html');
else console.log('У этой строки другое окончание');
/*Задача 12js.Pm.SM.St.12

Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.*/
str = '1-2-3-4-5';
let arr = str.split('-');
console.log(arr);
/*Задача 13js.Pm.SM.St.13

Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.*/
str = '12345';
arr = str.split('');
console.log (arr);
/*Задача 14js.Pm.SM.St.14

Дан следующий массив:

let arr = [1, 2, 3, 4, 5];
С помощью метода join слейте его в строку '1-2-3-4-5'.*/
arr = [1, 2, 3, 4, 5];
str = arr.join('-');
console.log(str);