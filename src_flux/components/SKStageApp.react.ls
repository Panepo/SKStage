require! {
	"react": React
	"./Header.react.ls": Header
	"./Footer.react.ls": Footer
	"./Content.react.ls": Content
	"../stores/AppStore.ls": AppStore
	"../actions/AppAction.ls": AppAction
	"../../css/App.css"
}

{div } = React.DOM

Header = React.createFactory Header
Footer = React.createFactory Footer
Content = React.createFactory Content

SKStageApp = React.createClass do
	displayName: "SKStageApp"

	getInitialState: -> {
		data: AppStore.getData!
	}
	
	componentDidMount: !->
		AppStore.addChangeListener @onChange

	componentWillUnmount: !->
		AppStore.removeChangeListener @onChange
	
	onChange: !->
		@setState {
			data: AppStore.getData!
		}

	render: ->
		div null,
			div className: "demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100",
				Header {
					toggle:@state.data.toggle
					bonus:@state.data.bonus
					type:@state.data.type
				}, null
				div className: "demo-ribbon mdl-shadow--4dp", null
				Content { 
					day:@state.data.day
					output:@state.data.output
					toggle:@state.data.toggle
					type:@state.data.type
				}, null
				Footer null

module.exports = SKStageApp