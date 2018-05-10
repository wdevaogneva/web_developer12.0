/*Простой вариант на уже заданных параметрах*/
/*var age = 17;
var logName = "Анна";
var isSubcribe = true;

function allCorrect () {
	alert('Поздравляем, ' + logName + '! Вам открыт доступ!');
	console.log('Пользователь ' + logName + 
							' допущен к просмотру содержимого сайта');
}

if ((age >= 18) && (isSubcribe == true)) {
	allCorrect();
} else {
	alert('Доступ запрещен!');
}*/

function checkGuard() {
	var age = document.getElementById("age").value;
	var logName = document.getElementById("name").value;
	var yesCheck = document.getElementsByName("subcribe");
	var isSubcribe = false; 

	if (yesCheck[0].checked) {
		isSubcribe = true;
	}

	if ((age === "") || (logName === "")) {
		alert('Введите данные!');
	} else if ((age >= 18) && (isSubcribe == true)) {
						alert('Поздравляем, ' + logName + '! Вам открыт доступ!');
						console.log('Пользователь ' + logName + 
												' допущен к просмотру содержимого сайта');
					} else {
						alert('Доступ запрещен!');
					}
}

document.getElementById("mainBtn").onclick = checkGuard;






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