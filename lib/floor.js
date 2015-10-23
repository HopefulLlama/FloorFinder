(function(){
	Imba.defineTag('floor_input','input', function(tag){
		tag.prototype.onkeyup = function (e){
			id$('app').setFloor(this.value().trim());
			return id$('app').render();
		};
	});
	
	Imba.defineSingletonTag('app', function(tag){
		
		tag.prototype.__floor = {name: 'floor'};
		tag.prototype.floor = function(v){ return this._floor; }
		tag.prototype.setFloor = function(v){ this._floor = v; return this; };
		
		tag.prototype.render = function (){
			var t0, t1, t2;
			return this.setChildren([
				(this.$a = this.$a || t$('label').flag('col-sm-3').flag('col-xs-12')).setText("What floor are you on?").end(),
				(t0 = this.$b=this.$b || t$('div').flag('col-sm-9').flag('col-xs-12')).setContent((t1 = t0.$$a=t0.$$a || t$('floor_input').flag('form-control').setType("number")).setContent(this.floor(),3).end(),2).end(),
				(t2 = this.$c=this.$c || t$('div')).setContent("You are on floor " + id$('app').floor() + "!",3).end()
			],2).synced();
		};
	});
	
	id$('app').setFloor(0);
	id$('app').render();
	return q$$('div#main-container').append(id$('app'));

})()