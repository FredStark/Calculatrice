//Script de la calculatrice

var screen= document.getElementById('screen');
var reponse = 0;

function f(x){
	screen.value += x;
}

function g(x){
	screen.value += x;
}

function equal(){
	if( /^[0-9]+(\.[0-9]+)?([\+\-\*\/][0-9]+(\.[0-9]+)?)*$/.test(screen.value) ){
		screen.value = eval(screen.value);
	}else{
		screen.value = "Syntax Error";
	}
}