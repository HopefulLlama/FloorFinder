tag floor-input < input
	def onkeyup e
		#app.floor = value.trim
		#app.render

tag #app
	prop floor

	def render
		<self>
			<label.col-sm-3.col-xs-12> "What floor are you on?"
			<div.col-sm-9.col-xs-12>
				<floor-input.form-control type="number"> floor
			<div> "You are on floor " + #app.floor + "!"

#app.floor = 0
#app.render
$$(div#main-container).append #app