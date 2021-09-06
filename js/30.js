/*Задача 30.1

В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/

let month = 2;
if(month >= 1 && month <=3) console.log('зима');
if(month >=4 && month <= 6) console.log('весна');
if(month >=7 && month <= 9) console.log('лето');
if(month >=10 && month <= 12) console.log('осень');

/*Задача 30.2

Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

let str = 'abcde';
if(str[0] == 'a') console.log('Да');
else console.log('нет');

/*Задача 30.3

Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

let num = 12345;
if(String(num)[0] == 1 || String(num)[0] == 2 || String(num)[0] == 3) console.log('Да');
else console.log('Нет');

/*Задача 30.4

Дано трехзначное число. Найдите сумму цифр этого числа.*/

let num3 = 234;
console.log(Number(String(num3)[0]) + Number(String(num3)[1]) + Number(String(num3)[2]) );

let str3 = String(num3);
console.log (Number(str3[0]) + Number(str3[1]) + Number(str3[2]) );

/*Задача 30.5

Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.*/

let num6 = 786687;
let str6 = String(num6);
if (Number(str6[0]) + Number(str6[1]) + Number(str6[2]) == Number(str6[3]) + Number(str6[4]) + Number(str6[5])) console.log('Да');
else console.log('Нет');
alert ('Конец!');

