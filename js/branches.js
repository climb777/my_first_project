var boatCapacity = 6;
var lastBoatRabbits = function(totalRabbits) {
  return totalRabbits && (totalRabbits % boatCapacity || boatCapacity);
};console.log(lastBoatRabbits(2));

// Задания
// Напишите функцию fizzbuzz, которая принимает параметр number и:
// Для чисел, кратных трём, возвращает 'Fizz'
// Для чисел, кратных пяти, возвращает 'Buzz'
// Для чисел, кратных пятнадцати (одновременно трём и пяти), возвращает 'FizzBuzz'
// В остальных случаях возвращает исходное число

var fizzbuzz = function(number) {
	if (number % 3 == 0 && number % 5 == 0)
		return 'FizzBuzz';
	else {
		if (number % 3 == 0)
			return 'Fizz';
		else {
			if (number % 5 == 0)
				return 'Buzz';
			else return number;
		}
	}
}
console.log(fizzbuzz(11));

// Напишите фунцию iGoToNorth, которая принимает параметр number и определяет, подходит ли нам переданное число. Число подходит если оно больше 10, меньше 30 и кратно 7.

var iGoToNorth = function(number) {
	if (number > 10 && number < 30 && (number % 7) == 0) {
		return 'подходит';
	}
	else {
		return 'не подходит';
	}
};
var num = 29;
console.log ('Число', num, iGoToNorth(num));

