// Задания
// Перво-наперво, сложим две строки: 
// 'Hello ' и 'javascript'. 
// Для сложения воспользуемся операцией 
// соединения строк: +.

var firstHalf = 'Hello '
var secondHalf = 'javascript';
var string = firstHalf + secondHalf;
console.log(string);
console.log(string.length);
console.log('Длина строки', string, string.length);

// Получите индекс буквы j в фразе 
// quick brown fox jumped over lazy dog, 
// используя метод строки indexOf.

console.log(secondHalf.indexOf('c'));
console.log('quick brown fox jumped over lazy dog'.indexOf('j'));


// Получите из строки 'Goodbye javascript' 
// строку 'Hello javascript', 
// используя метод replace.

var stringGoodbuy = 'Goodbuy javascript';
console.info(stringGoodbuy.replace('Goodbuy', 'Hello'));

// Ещё одно упражнение на метод replace: 
// замените все вхождения буквы i в строке 
// 'mississippi' на символ ! 
// (восклицательный знак).

console.log('mississippi'.replace(/i/g, '!'));
console.info('Из строки', 'Hello', 'выняли третью букву', 'Hello'.substr(3));
console.log('quick brown fox jumped over lazy dog'.substr(8, 19));
console.log('quick brown fox jumped over lazy dog'.substr(8));
console.log('quick brown fox jumped over lazy dog'.substring(8, 23));
console.log('quick brown fox jumped over lazy dog'.substring(21));