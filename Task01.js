// ??????? 1

/*???????? ?????????, ??????? ???????? ?? ????????? ???????: 
? prompt ???????? ????????. ? ??????? ???????? ????? (?????????????? ????????)
?????????? ????????????? ??? ? ?????, ????? ????????? ? ??????? typeof, 
??????????? ?? ??? ? ????????? Number.
???? ??? ?????, ?? ??????? ? ??????? ?????? ??? ??? ????????.
???? ???????? ?? ?????, ????????: ????, ???????, ?? ?????????.*/

let inputNum = prompt("??????? ?????????? ?????: ");
inputNum = +inputNum; //??????????? ????????? ???????? ? ?????
if (typeof inputNum === 'number'){
	evenTest = inputNum % 2; //????????? ?????? ????? ??? ???
	if (evenTest === 0){
		console.log("????? " + inputNum + " ??????.") //??????? ????? ??????? ?? 2 ???, ????? ??????  
	}
	else if (evenTest === 1) {
		console.log("????? " + inputNum + " ????????.")
	}
	else {
		console.log("???, ???????, ?? ????????")
	}
}