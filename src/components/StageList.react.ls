require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../actions/AppAction.ls": AppAction
	"../css/StageList.css"
}

{div, button, table, thead, tr, th, tbody, td, label, input, a} = React.DOM

StageList = React.createClass do
	displayName: "StageList"

	propTypes:
		id: ReactPropTypes.string.isRequired
		output: ReactPropTypes.array.isRequired
		display: ReactPropTypes.bool.isRequired
		day: ReactPropTypes.number.isRequired
	
	componentDidUpdate: !->
		componentHandler.upgradeDom()
	
	handleChange: (event) !->
		trId = event.target.id + "tr"
		if event.target.checked
			document.getElementById(trId).style.backgroundColor = '#f5f5f5'
		else
			document.getElementById(trId).style.backgroundColor = "transparent"

	handleSort: (event) !->
		AppAction.sortChange event.target.id

	render: ->
		div null,
			if @props.display is true
				table className: Constants.TableClass,
					thead null,
						tr null,
							for list, i in Constants.listThead
								th id: Constants.TbodyClass[i], key:"thead" + i.toString(), onClick: @handleSort, list
					tbody null,
						for out, i in @props.output
							tr key:"check"+i.toString()+"tr" id: @props.id+"check"+i.toString()+"tr",
								for list, j in Constants.TbodyClass
									td className: Constants.TbodyClass[j], key:"tbody"+i.toString()+j.toString(),
										if j is 0
											label className: "mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select", htmlFor: @props.id+"check"+i.toString(),
												input type: "checkbox" id:@props.id+"check"+i.toString(), className: "mdl-checkbox__input", onChange: @handleChange, null
										else
											if list is "exp"
												if out[@props.day] is "1"
													label className:"expBonus", out["exp12"]
												else
													out[list]
											else if list is "expM"
												if out[@props.day] is "1"
													label className:"expBonus", out["exp12M"]
												else
													out[list]
											else if list is "gold"
												if out[@props.day] is "2"
													label className:"goldBonus", out["gold12"]
												else
													out[list]
											else if list is "goldM"
												if out[@props.day] is "2"
													label className:"goldBonus", out["gold12M"]
												else
													out[list]
											else
												out[list]

module.exports = StageList