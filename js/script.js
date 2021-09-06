/*Два велосипедиста одновременно выехали
навстречу друг дгугу из двух полесков 
и встретились через 3 часа.
Первый велосипедист ехал со скоростью 12 км/ч,
а второй - 14 км/ч.
На каком расстоянии находятся поселки?*/



var calculateDistance = function(time,
	speedOfFirstCyclist, speedOfSecondCyclist) {
	/*Алгоритм
1. Найти расстояние, которое проехал 
первый велосипедист, умножив его скорость
на время*/

var distanceOfFirstCyclist = speedOfFirstCyclist * time;

/*
2. Найти расстояние, которое проехал 
второй велосипедист, умножив его скорость
на время*/

var distanceOfSecondCyclist = speedOfSecondCyclist * time;

/*3. Сложить расстояния, которые 
проехади оба велосипедиста*/

var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
return totalDistance;
}
console.info(calculateDistance(3, 12, 14));
console.info(calculateDistance(8, 28, 24));


