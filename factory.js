/*
* Javascrip Factory
*/
var myObject = new Object();
function myOObject(){this.nome='';this.setNome=function(nome){this.nome=nome;};this.alertNome=function(){alert(this.nome);};}

/*
 * Esta Factory funciona Quase como um singleton. Ela nao pode ser instanciada com o new.
 * Os metodos sao, por default, estaticos.
 * Retorna um objeto no qual esteja presente no escopo da aplicacao.
 */
var Factory = {
	createObject: function(id){
		if(id === 'mo')
			return new myObject();
		else if(id === 'moo')
			return new myOObject();
		else
			return null;
	}
}
var luizin = Factory.createObject('moo');