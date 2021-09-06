/*Задача 1js.Pm.SM.Ar.1

Дан следующий массив:

[1, 2, 3]
Добавьте ему в конец элементы 4, 5, 6.*/
let arr = [1, 2, 3];
let length = arr.push(4, 5, 6);
console.log('Длина массива ' + arr + ' сейчас: ' + length );
/*Задача 2js.Pm.SM.Ar.2

Дан следующий массив:

[1, 2, 3]
Добавьте ему в начало элементы 4, 5, 6.*/
arr = [1, 2, 3];
length = arr.unshift(4, 5, 6);
console.log('Длина массива ' + arr + ' сейчас: ' + length);
/*Задача 3js.Pm.SM.Ar.3

Дан следующий массив:

[1, 2, 3]
Выведите на экран первый элемент этого массива.*/
arr =  [1, 2, 3];
let first = arr.shift();
console.log(first);
/*Задача 4js.Pm.SM.Ar.4

Дан следующий массив:

[1, 2, 3]
Выведите на экран последний элемент этого массива.*/
let last = arr.pop();
console.log(last);
/*Задача 5js.Pm.SM.Ar.5

Дан следующий массив:

[1, 2, 3, 4, 5]
Сделайте из этого массива следующий:

[1, 2, 3]*/
arr = [1, 2, 3, 4, 5];
arr.pop();
arr.pop();
console.log(arr);

arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(0, 3);
console.log('новый массив: ' + arr2);

/*Задача 6js.Pm.SM.Ar.6

Дан следующий массив:

[1, 2, 3, 4, 5]
Используя этот массив, запишите в новую переменную следующий массив:

[4, 5]*/
arr = [1, 2, 3, 4, 5];
let newArr = [];
for(let i = 0; i < 2; i++) {
	newArr.unshift(arr.pop());
}
console.log(newArr);
arr = [1, 2, 3, 4, 5];
let arr3 = arr.slice(3);
console.log('Новый массив: ' + arr3);
console.log(arr3);
/*Задача 7js.Pm.SM.Ar.7

Дан следующий массив:

[1, 2, 3, 4, 5]
С помощью метода splice преобразуйте массив в следующий:

[1, 4, 5]*/
arr = [1, 2, 3, 4, 5];
arr.splice(1, 1);
console.log(arr);
arr.splice(2, 1);
console.log(arr);

/*Задача 8js.Pm.SM.Ar.8

Дан следующий массив:

[1, 2, 3, 4, 5]
С помощью метода splice сделайте из него массив:

[1, 2, 3, 'a', 'b', 'c', 4, 5]*/
arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log (arr);

/*Задача 9js.Pm.SM.Ar.9

Дан следующий массив:

[1, 2, 3, 4, 5]
С помощью метода splice сделайте из него массив:

[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']*/
arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
console.log (arr);
arr.splice(6, 0, 'c', 5);
console.log(arr);
arr.splice(-1, 0, 'e');
arr.splice(-1, 1);
console.log(arr);

/*Задача 10js.Pm.SM.Ar.10

Дан следующий массив:

[1, 2, 3, 4, 5]
Найдите позицию числа 3 в этом массиве.*/
arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3));

/*Задача 11js.Pm.SM.Ar.11

Дан следующий массив:

[1, 2, 3, 4, 5]
Проверьте, есть ли в этом массиве число 3.*/
arr = [1, 2, 3, 4, 5];
let num = 6;
if(arr.includes(num)) console.log('Элемент ' + num + ' есть в массиве');
else console.log('Такого элемента в массиве нет');
