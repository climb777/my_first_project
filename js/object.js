let obj = {1 : 'a', 2: 'b', 3: 'c'};
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);
console.log(obj);
let obj1 = {a: 1, b: 2, c: 3};
console.log(obj1);
console.log(obj1['a'] + obj1['b'] + obj1['c']);
let obj2 = {'1a': 1, '2b': 2, 'c-c': 3};
console.log(obj2);
let obj3 = {'1a': 1, 'b2': 2, 'c-c': 3, 'd4': 4};
console.log(obj3);
let obj4 = {key1: 1, key2: 2, key3: 3};
console.log(obj4.key1 + obj4.key2 + obj4.key3);
console.log(obj3['1a'] + obj3.b2 + obj3['c-c'] + obj3.d4);

let user = {name: 'Сергей', surname: 'Герасимович', patronymic: 'Олегович'};
console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);

let date = {year: '2021', month: '08', day: '22'}
console.log(date.year + '-' + date.month + '-' + date.day);

let obj5 = {};
obj5['a'] = 1;
obj5['b'] = 2;
obj5['c'] = 3;
console.log(obj5);
let obj6 = {};
obj6.a = 1;
obj6.b = 2;
obj6.c = 3;
console.log(obj6);




