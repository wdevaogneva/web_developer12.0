/* Доп.задание 1 - */

function go() {
	var myWidth = screen.width;
	var myHeight = screen.height;
	var s = myWidth*myHeight;

console.log ('Ширина экрана: ' + myWidth);
console.log ('Высота экрана: ' + myHeight);
console.log ('Площадь экрана: ' + s);

for (var i = 0; i < 10; i++) {
	myWidth = myWidth+10;
	s= myWidth*myHeight;
	console.log (i+1 + ') Новая ширина экрана: ' + myWidth);
	console.log ('Новая площадь экрана: ' + s);
}
}

document.getElementById("mainBtn").onclick = go;


/* Доп.задание 2 - проверить где ошибка при использовании typeof*/

/*var age = 1;
var logo;
var logName = "noName";
var isSubcribe = false;
var mySymbol  = Symbol();
var myObj = { name: "Рита" };

console.log('Проверяем ЧИСЛО: typeof = ');
console.log(typeof age);
console.log('Проверяем СТРОКУ: typeof = ');
console.log(typeof logName);
console.log('Проверяем ЛОГИЧЕСКУЮ ПЕРЕМЕННУЮ: typeof = ');
console.log(typeof isSubcribe);
console.log('Проверяем ОБЪЕКТ: typeof = ');
console.log(typeof myObj);
console.log('Проверяем НЕОПРЕДЕЛЕННЫЙ ТИП: typeof = ');
console.log(typeof logo);
console.log('Проверяем NULL-ТИП: typeof = ');*/
/*console.log(typeof adgfhrjk);*/
/*console.log('Проверяем СИМВОЛ: typeof = ');
console.log(typeof mySymbol);*/