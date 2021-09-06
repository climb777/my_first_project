/*Давайте напишем функцию getInt, которая будет находить пересечение массивов и возвращать пересечение этих массивов. Пусть пересечение возвращается в виде массива, состоящего из общих элементов.*/
function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}

function getInt(arr1, arr2) {
	let result = [];
	for(let elem of arr1) {
		if(inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	return result;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 5, 6, 7];
console.log(getInt(arr1, arr2));