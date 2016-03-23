require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
	"./Header.css"
}

{div, span, nav, button} = React.DOM

Header = React.createClass do
	displayName: "Header"
	
	propTypes:
		toggle: ReactPropTypes.array.isRequired
		
	getInitialState: -> {
		toggleAll: false
	}
	
	handleToggle: (event) !->
		toggle = @props.toggle
		toggleNumber = parseInt event.target.id.slice(8)
		if toggle[toggleNumber] is 1
			toggle[toggleNumber] = 0
		else
			toggle[toggleNumber] = 1
		
		AppAction.toggleChange toggle
		
	handleToggleAll: (event) !->
		toggle = @props.toggle
		
		if @state.toggleAll is true
			@setState { toggleAll: false }
			for toggleValue, i in toggle
				toggle[i] = 0
		else
			@setState { toggleAll: true }
			for toggleValue, i in toggle
				toggle[i] = 1
				
		AppAction.toggleChange toggle

	render: ->
		div null,
			div className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
				div className: "mdl-layout__header-row",
					span className: "mdl-layout-title", null
					div className: "mdl-layout-spacer", null
				nav className: "floating-menu mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col",
					if @state.toggleAll is true
						button className: Constants.buttonClassActive, onClick: @handleToggleAll, "全選"
					else
						button className: Constants.buttonClassInactive, onClick: @handleToggleAll, "全選"
					for type, i in Constants.listStage
						div key: "checkbox" + i.toString(),
							if @props.toggle[i] is 1
								button id: "checkbox" + i.toString(), className: Constants.buttonClassActive, onClick: @handleToggle, type
							else
								button id: "checkbox" + i.toString(), className: Constants.buttonClassInactive, onClick: @handleToggle, type
				div className: "demo-ribbon", null

module.exports = Header