require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
	"../../css/StageList.css"
	"../../image/w1claymore.png": w1
	"../../image/w2bow.png": w2
	"../../image/w3staff.png": w3
	"../../image/w4axe.png": w4
}

{div, button, table, thead, tr, th, tbody, td, label, input, a, img} = React.DOM

StageList = React.createClass do
	displayName: "StageList"

	propTypes:
		id: ReactPropTypes.string.isRequired
		output: ReactPropTypes.array.isRequired
		display: ReactPropTypes.bool.isRequired
		day: ReactPropTypes.number.isRequired
	
	componentDidUpdate: !->
		componentHandler.upgradeDom!
	
	handleChange: (event) !->
		trId = event.target.id + "tr"
		if event.target.checked
			document.getElementById(trId).style.backgroundColor = '#f5f5f5'
		else
			document.getElementById(trId).style.backgroundColor = "transparent"

	handleSort: (event) !->
		AppAction.sortChange event.target.id

	displayContent: (out, list) ->
		switch list
		case "type"
			switch out["type"]
			case '近接'
				img src: w1, height: "25", width: "25", null
			case '射撃'
				img src: w2, height: "25", width: "25", null
			case '魔法'
				img src: w3, height: "25", width: "25", null
			case '重装'
				img src: w4, height: "25", width: "25", null
			default
				out[list]
		case "exp"
			if out[@props.day] is "1"
				label className:"expBonus", out["exp12"]
			else
				out[list]
		case "expM"
			if out[@props.day] is "1"
				label className:"expBonus", out["exp12M"]
			else
				out[list]
		case "gold"
			if out[@props.day] is "2"
				label className:"goldBonus", out["gold12"]
			else
				out[list]
		case "goldM"
			if out[@props.day] is "2"
				label className:"goldBonus", out["gold12M"]
			else
				out[list]
		default
			out[list]

	render: ->
		div className: "StageList",
			if @props.display is true
				table className: Constants.TableClass,
					thead null,
						tr null,
							for list, i in Constants.listThead
								th id: Constants.TbodyClass[i], key:"thead" + i.toString!, onClick: @handleSort, list
					tbody null,
						for out, i in @props.output
							tr key:"check"+i.toString!+"tr" id: @props.id+"check"+i.toString!+"tr",
								for list, j in Constants.TbodyClass
									td className: Constants.TbodyClass[j], key:"tbody"+i.toString!+j.toString!,
										if j is 0
											label className: "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select", htmlFor: @props.id+"check"+i.toString!,
												input type: "checkbox" id:@props.id+"check"+i.toString!, className: "mdl-checkbox__input", onChange: @handleChange, null
										else
											@displayContent(out, list)

module.exports = StageList