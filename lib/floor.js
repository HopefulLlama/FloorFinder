(function(){
	var question = t$('label').flag('col-sm-3').flag('col-xs-12').setText("What floor are you on?").end();
	var answerBox = t$('div').flag('col-sm-9').flag('col-xs-12').setContent(t$('input').flag('form-control').setType("number").setContent(0).end()).end();
	
	var questionAndAnswerContainer = t$('form').flag('form-horizontal').setContent(t$('div').flag('form-group').setContent([
		question,
		answerBox
	]).end()).end();
	
	var floor = "";
	function setFloor(number){
		return floor = number;
	};
	
	var submitAnswerButton = t$('button').flag('col-xs-12').flag('btn').flag('btn-default').setType("button").setHandler('tap',[setFloor(5)],this).setText("Which floor am I on?").end();
	
	var answerContainer = t$('div').setContent("You are on floor " + floor + "!").end();
	
	q$$('div#main-container').append(questionAndAnswerContainer);
	q$$('div#main-container').append(submitAnswerButton);
	q$$('div#main-container').append(answerContainer);

})()