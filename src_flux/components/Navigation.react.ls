require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
	"../../css/Navigation.css"
}

{div, span, nav, button, img, a, label} = React.DOM

Navigation = React.createClass do
	displayName: "Navigation"
	
	propTypes:
		toggle: ReactPropTypes.array.isRequired
		bonus: ReactPropTypes.array.isRequired
		
	getInitialState: -> {
		toggleAll: false
	}
	
	handleToggle: (number) !->
		toggle = @props.toggle
		toggleNumber = number
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
			nav className: "floating-menu mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col",
				div className: "menu-button",
					if @state.toggleAll is true
						button className: Constants.buttonClassActive, onClick: @handleToggleAll, "全選"
					else
						button className: Constants.buttonClassInactive, onClick: @handleToggleAll, "全選"
					for type, i in Constants.listStage
						div key: "checkbox" + i.toString!,
							if @props.toggle[i] is 1
								button className: Constants.buttonClassActive, onClick: @handleToggle.bind(null, i), type
							else
								button className: Constants.buttonClassInactive, onClick: @handleToggle.bind(null, i), type
			nav className: "floating-menu2 mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col",
				if @props.bonus[0].length !== 0
					div className: "menu-bonus",
						div className: "menu-bonus-text", '今日EXP 2倍'
						for bonus, i in @props.bonus[0]
							div key:"imgtoday" + i,
								img className: "menu-bonus-image", src: "./img/" + bonus.image, alt: bonus.name,
				if @props.bonus[1].length !== 0
					div className: "menu-bonus",
						div className: "menu-bonus-text", '明日EXP 2倍'
						for bonus, i in @props.bonus[1]
							div key:"imgtomorrow" + i,
								img className: "menu-bonus-image", src: "./img/" + bonus.image, alt: bonus.name,

module.exports = Navigation