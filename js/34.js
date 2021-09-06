let ok = confirm ('Текст вопроса');
console.log(ok);
if(ok) {
	console.log('Вы ответили да')
}
else {
	console.log('Вы ответили нет');
}

let adult = confirm ('Вам уже есть 18 лет?');
if (adult) {
	console.log('Можно читать');
}
else {
	console.log('Доступ запрещен');
}