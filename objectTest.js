/*
* Javascrip objectTest
*/
function barraCereal(){
	var marca =   '';
	var sabor =   '';
	var energia = '';
	this.barraCereal = function(marca, sabor, energia){
		this.marca 		= marca;
		this.sabor 		= sabor;
		this.energia 	= energia;
	};
	this.getInfo = function(){
		alert(this.marca + ' k ' + this.sabor + ' l ' + this.energia);
	}
}

var teste = new barraCereal();
teste.barraCereal('trio','banana com aveia','25kcal');
teste.getInfo();