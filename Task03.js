/* ������� 3

���� ������. ���������� ������� � ������� ����������� �������. 
��������, "Hello" -> "olleH".*/

let stringInput = prompt("������� ���������� �����");
console.log("�� �����: " + stringInput);
const reverse = stringInput.split('').reverse().join('');
console.log("� �������� ������� �����: " + reverse);
