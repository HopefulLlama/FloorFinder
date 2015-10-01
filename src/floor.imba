var question = <label.col-sm-3.col-xs-12> "What floor are you on?"
var answerBox = <div.col-sm-9.col-xs-12>
	<input.form-control type="number"> 0 

var questionAndAnswerContainer = <form.form-horizontal> 
	<div.form-group>
		question 
		answerBox

var floor = ""
def setFloor number
	floor = number

var submitAnswerButton = <button.col-xs-12.btn.btn-default type="button" :tap=[setFloor 5]> "Which floor am I on?"

var answerContainer = <div> "You are on floor " + floor + "!"

$$(div#main-container).append questionAndAnswerContainer
$$(div#main-container).append submitAnswerButton
$$(div#main-container).append answerContainer