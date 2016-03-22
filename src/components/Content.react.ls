require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
	"./Content.css"
}

{div, button, table, thead, tr, th, a, h4} = React.DOM

listTab = ["日 (Sun)" "月 (Mon)" "火 (Tue)" "水 (Wed)" "木 (Thu)" "金 (Fri)" "土 (Sat)"]

Content = React.createClass do
	displayName: "Content"
	
	propTypes:
		day: ReactPropTypes.number.isRequired

	handleDayChange: (event) !->
		AppAction.dayChange parseInt event.target.id

	render: ->
		div className: "content",
			h4 null, "政剣マニフェスティア戦挙区効率表"
			"更新: 2016/03/07"
			div className: "mdl-tabs mdl-js-tabs mdl-js-ripple-effect",
				div className: "mdl-tabs__tab-bar",
					for list, i in listTab
						if @props.day is i
							button className: Constants.buttonClassActive, key:i, id:i, onClick: @handleDayChange, list
						else
							button className: Constants.buttonClassInactive, key:i, id:i, onClick: @handleDayChange, list

module.exports = Content