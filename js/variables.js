// Задания
// В коробке лежит 10 красных фишек, 20 синих и 40 жёлтых. Фиолетовых фишек столько, сколько синих и красных вместе. Зелёных столько, сколько жёлтых и синих. Оранжевых столько, сколько жёлтых и красных. Посчитайте количество чёрных фишек, если оно равно сумме количества зелёных, оранжевых и фиолетовых фишек.

var red = 10;
var blue = 20;
var yellow = 40;
var violet = red + blue;
var green = yellow + blue;
var orange = yellow + red;
var black = green + orange + violet;
console.log('фиолетовых', violet + '\n' + 'зеленых', green + '\n' + 'оранжевых', orange + '\n' + 'черных', black);

// Объявите две переменные hello и goodbye, сразу же проинициализируйте их значениями. Объявите и проинициализируйте переменную name значением 'Пётр'. Используя переменные, составьте строку 'Привет, Пётр. Пока, Пётр.'. В выражении можно использовать дополнительную строку из одного пробела. А можно обойтись без неё ;)

var hello = 'Привет';
var goodbye = 'Пока';
var name = 'Пётр';
console.log(hello + ',',name + '.', goodbye + ',', name + '.');