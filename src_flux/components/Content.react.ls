require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
	"../../css/Content.css"
	"./StageList.react.ls": StageList
}

{main, div, h4, button} = React.DOM

StageList = React.createFactory StageList

Content = React.createClass do
	displayName: "Content"
	
	propTypes:
		day: ReactPropTypes.number.isRequired
		output: ReactPropTypes.array.isRequired
		type: ReactPropTypes.string.isRequired

	handleDayChange: (day) !->
		AppAction.dayChange day

	render: ->
		main className: "demo-main mdl-layout__content",
			div className: "demo-container mdl-grid",
				div className: "mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone", null
				div className: "content demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col",
					h4 null, "政剣マニフェスティア戦挙区効率表"
					"更新: " Constants.updateTime
					div className: "mdl-tabs mdl-js-tabs mdl-js-ripple-effect",
						div className: "mdl-tabs__tab-bar",
							for list, i in Constants.listTab
								if @props.day is i
									button className: Constants.buttonClassActive, key:i, onClick: @handleDayChange.bind(null, i), list
								else
									button className: Constants.buttonClassInactive, key:i, onClick: @handleDayChange.bind(null, i), list
						for toggle, i in @props.toggle
							if toggle is 1
								StageList {
									key: "stage" + i
									id: "stage" + i
									output: @props.output[i]
									display: true
									day:@props.day
									type:@props.type
								}, null
							else
								StageList {
									key: "stage" + i
									id: "stage" + i
									output: @props.output[i]
									display: false
									day:@props.day
									type:@props.type
								}, null

module.exports = Content