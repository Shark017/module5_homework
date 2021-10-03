/* Задание 3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".*/

let stringInput = prompt("Введите пожалуйста текст");
console.log("Вы ввели: " + stringInput);
const reverse = stringInput.split('').reverse().join('');
console.log("В обратном порядке будет: " + reverse);
