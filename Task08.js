/*������� 8.
�������� ������������ ������ Map. �������� ��� ����� � �������� � ������� ��� �������� � 
���� ����� � �, �������� � Y�.
����������� ��������� ������.*/

let days = new Map();
days.set(1, "Monday");
days.set(2, "Tuesday");
days.set(3, "Wednes�day");
days.set(4, "Thursday");
days.set(5, "Friday");
days.set(6, "Saturday");
days.set(7, "Sunday"); 
for (let name of days.keys()) { //�������� ����� �������
	console.log(name);
}
days.forEach((value, key) => { //����� � ������� �������� � �������� ����
	console.log(`���� - ${key}, �������� - ${value}`);
});