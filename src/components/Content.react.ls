require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
	"./Content.css"
	"./StageList.react.ls": StageList
}

{div, button, table, thead, tr, th, a, h4, tbody, td, label, input} = React.DOM

StageList = React.createFactory StageList

Content = React.createClass do
	displayName: "Content"
	
	propTypes:
		day: ReactPropTypes.number.isRequired
		output: ReactPropTypes.array.isRequired
	
	componentDidUpdate: !->
		componentHandler.upgradeDom()

	handleDayChange: (event) !->
		AppAction.dayChange parseInt event.target.id
	
	handleChange: (event) !->
		trId = event.target.id + "tr"
		if event.target.checked
			document.getElementById(trId).style.color = "blue"
		else
			document.getElementById(trId).style.color = "black"

	render: ->
		div className: "content",
			h4 null, "政剣マニフェスティア戦挙区効率表"
			"更新: 2016/03/23"
			div className: "mdl-tabs mdl-js-tabs mdl-js-ripple-effect",
				div className: "mdl-tabs__tab-bar",
					for list, i in Constants.listTab
						if @props.day is i
							button className: Constants.buttonClassActive, key:i, id:i, onClick: @handleDayChange, list
						else
							button className: Constants.buttonClassInactive, key:i, id:i, onClick: @handleDayChange, list
				for toggle, i in @props.toggle
					if toggle is 1
						StageList {
							key: "stage" + i
							id: "stage" + i
							output: @props.output[i]
							display: true
							day:@props.day
						}, null
					else
						StageList {
							key: "stage" + i
							id: "stage" + i
							output: @props.output[i]
							display: false
							day:@props.day
						}, null

module.exports = Content