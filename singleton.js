/*
 * FANCY Singleton
 */
var Singleton = (function(){
	var instance = null;
	function init(){
		return {
			name: '',
			getName: function(){alert(name);},
			setName: function(input){name = input;}
		}
	}
	return {
		getInstance: function(){
			if(!this.instance)
				this.instance = init();
			return this.instance;
		}
	}
})();
//Singleton.getInstance.setName("It's working!");
//Singleton.getInstance().getName();


/*
 * NOT FANCY Singleton
 */

var oSingleton = {
	instance: null,
	constructor: null,
	init: function(){
		return {
			name: '',
			getName: function(){alert(name);},
			setName: function(input){name = input;}
		}
	},
	getInstance: function(){
		if(!this.instance)
			this.instance = this.init();
		return this.instance;
	}
};