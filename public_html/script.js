//Script de la calculatrice

var screen= document.getElementById('screen');
var opInd = 0;

function f(x){
	opInd = 0;
	screen.value += x;
}

function g(x){
	if (opInd==0){
		screen.value += x;
		opInd++;
	}
}

function equal(){
	if( /^[\+\-]?[0-9]+(\.[0-9]+)?([\+\-\*\/][0-9]+(\.[0-9]+)?)*$/.test(screen.value) ){
		screen.value = eval(screen.value);
	}else{
		screen.className = "error";
		screen.value = "Syntax Error";
	}
}