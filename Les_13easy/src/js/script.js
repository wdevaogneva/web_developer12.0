/*задаем переменные различными способами*/

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

/*место проверки*/
/*console.log(story.length);*/

/*Меняем стили*/
/*main.style.background = "green";*/



function addItem(){
	/*создаем новый элемент списка*/
	var newLi = document.createElement("li");
	/*добавляет параметр в документ HTML*/
	newLi.innerHTML = "Новая задача!";
	/*добавляет параметр class для стилизации объекта*/
	newLi.className = "item";
	/*добавляем наш созданый элемент, как дочерний к нашему списку*/
	myList.appendChild(newLi);
	/*закрываем всплывающее окно при добавлении новой задачи*/
	popup.style.display = "none";
}

function delItem(){
	/*удаляем дочерний элемент из нашего списка
	удаляем первый элемент из списка, обозначенного переменной story*/
	myList.removeChild(story[0]);
	/*проверяем наличие элементов в списке (возращает кол-во элементов в массиве)*/
	if (story.length == 0){
		/*Меняем стилm - делаем элемент блочным*/
		popup.style.display = "block";
	}
}

function closePopup(){
	popup.style.display = "none";
}


/*такая кострукция лучше, чем btn1.onclick, ибо несколько подряд btn1.onclick
перекрывают друг друга и срабатывает только последнее указанное
нижеуказанный метод же добавлет событие в некий последовательный "лист"*/
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);