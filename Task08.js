/*Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в 
виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let days = new Map();
days.set(1, "Monday");
days.set(2, "Tuesday");
days.set(3, "Wednes­day");
days.set(4, "Thursday");
days.set(5, "Friday");
days.set(6, "Saturday");
days.set(7, "Sunday"); 
for (let name of days.keys()) { //Получаем ключи массива
	console.log(name);
}
days.forEach((value, key) => { //Вывод в консоль значений в заданном виде
	console.log(`Ключ - ${key}, значение - ${value}`);
});