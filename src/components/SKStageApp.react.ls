require! {
	"react": React
	"./Header.react.ls": Header
	"./Footer.react.ls": Footer
	"./Content.react.ls": Content
	"../stores/AppStore.ls": AppStore
	"../actions/AppAction.ls": AppAction
	"./SKStageApp.css"
}

{div, table, thead, tbody, th, tr, td, label, input, main } = React.DOM

Header = React.createFactory Header
Footer = React.createFactory Footer
Content = React.createFactory Content

SKStageApp = React.createClass do
	displayName: "SKStageApp"

	getInitialState: -> {
		data: AppStore.getData()
	}
	
	componentDidMount: !->
		AppStore.addChangeListener @onChange
		dateTime = new Date()
		dateDay = dateTime.getUTCDay()
		dateHour = dateTime.getUTCHours()
		dateHour = dateHour + 9
		if dateHour >= 24
			dateHour = dateHour - 24
			dateDay = dateDay + 1
			if dateDay >= 7
				dateDay = dateDay - 7
		AppAction.dayChange dateDay

	componentWillUnmount: !->
		AppStore.removeChangeListener @onChange
		
	onChange: !->
		@setState {
			data: AppStore.getData()
		}

	render: ->
		div null,
			div className: "demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100",
				Header toggle:@state.data.toggle, null
				div className: "demo-main mdl-layout__content",
					div className: "demo-container mdl-grid",
						div className: "mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone", null
						div className: "demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col",
							Content { 
								day:@state.data.day
								output:@state.data.output
								toggle:@state.data.toggle
							}, null
				Footer null

module.exports = SKStageApp