let str = 'abcdefgh';
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);
let num = 5;
console.log(str[num]);

let str1 = str[7] + str[6] + str[5] + str[4] + str[3] + str[2] + str[1] + str[0];
console.log(str1);

let last = str.length - 1;
console.log(str[last]);
console.log(str[str.length - 2]);
console.log(str[str.length - 3]);

let git = '12345';
console.log(git[0] + git[1]);
console.log(Number(git[0]) + Number(git[1]));
let git1 = 12345;
let git11 = String(git1); //преобразуем в строку
console.log(git11);
console.log(Number(git11[0]) + Number(git11[1]));
console.log(Number(git11[3]) + Number(git11[4]));
console.log(git11[0] * git11[1] * git11[2] * git11[3] * git11[4]);
console.log(git11[4] + git11[3] + git11[2] + git11[1] + git11[0]);

