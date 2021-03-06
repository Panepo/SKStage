import React, { Component, PropTypes } from 'react'
import { listThead } from '../constants/ConstList'
import { Ctable, Ctbody } from '../constants/ConstClassname'
import w1 from '../../image/w1claymore.png'
import w2 from '../../image/w2bow.png'
import w3 from '../../image/w3staff.png'
import w4 from '../../image/w4axe.png'

export default class StageList extends Component {
	componentDidUpdate() {
		componentHandler.upgradeDom()
	}
	
	handleChange(event) {
		var trId = event.target.id + "tr"
		if ( event.target.checked ) {
			document.getElementById(trId).style.backgroundColor = '#f5f5f5'
		} else {
			document.getElementById(trId).style.backgroundColor = "transparent"
		}
	}
	
	generateTableData(out, i, j, list) {
		const { id, day, charType } = this.props
		
		if ( j == 0 ) {
			return (
				<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-data-table__select" htmlFor={id+"check"+i.toString()} >
					<input type="checkbox" id={id+"check"+i.toString()} className="mdl-checkbox__input" onChange={this.handleChange} />
				</label>
			)
		} else {
			switch ( list ) {
				case "type":
					switch ( out["type"] ) {
						case '近接':
							return <img src={w1} height="25" width="25" />
						case '射撃':
							return <img src={w2} height="25" width="25" />
						case '魔法':
							return <img src={w3} height="25" width="25" />
						case '重装':
							return <img src={w4} height="25" width="25" />
						default:
							return out[list]
					}
				case "exp":
					if (out[day.toString()] == "1") {
						if ( out["type"] === charType ) {
							return <label className="expBonus">{Math.floor(out[list]*1.4)}</label>
						} else {
							return <label className="expBonus">{Math.floor(out[list]*1.2)}</label>
						}
					} else {
						if ( out["type"] === charType ) {
							return <label className="expBonus">{Math.floor(out[list]*1.2)}</label>
						} else {
							return out[list]
						}
					}
				case "expM":
					if (out[day.toString()] == "1") {
						if ( out["type"] === charType ) {
							return <label className="expBonus">{(Math.floor(out["exp"]*1.4)/out["point"]).toFixed(2)}</label>
						} else {
							return <label className="expBonus">{(Math.floor(out["exp"]*1.2)/out["point"]).toFixed(2)}</label>
						}
					} else {
						if ( out["type"] === charType ) {
							return <label className="expBonus">{(Math.floor(out["exp"]*1.2)/out["point"]).toFixed(2)}</label>
						} else {
							return out[list]
						}
					}
				case "gold":
					if (out[day.toString()] == "2") {
						return <label className="goldBonus">{Math.floor(out[list]*1.2)}</label>
					} else {
						return out[list]
					}
				case "goldM":
					if (out[day.toString()] == "2") {
						return <label className="goldBonus">{(Math.floor(out["gold"]*1.2)/out["point"]).toFixed(2)}</label>
					} else {
						return out[list]
					}
				default:
					return out[list]
			}
		}
	}
	
	generateTableBody() {
		const { id, day, output } = this.props
		
		var tbodyOut
		var tbodyTemp
		var tbodyTempOut = []
		for (var i=0; i<output.length; i++) {
			var tdTemp
			var tdTempOut = []
			for (var j=0; j<Ctbody.length; j++) {
				tdTemp = (
					<td className={Ctbody[j]} key={"tbody"+i.toString()+j.toString()} >
						{this.generateTableData(output[i], i, j, Ctbody[j])}
					</td>
				)
				tdTempOut.push(tdTemp)
			}
			tbodyTemp = (
				<tr key={"check"+i.toString()+"tr"} id={id+"check"+i.toString()+"tr"}>
					{tdTempOut}
				</tr>
			)
			tbodyTempOut.push(tbodyTemp)
		}
		tbodyOut = <tbody>{tbodyTempOut}</tbody>
		
		return tbodyOut
	}
	
	generateTableHead() {
		const { sortFunc } = this.props
		
		var theadOut
		var theadTemp
		var theadTempOut = []
		for (var i=0; i<listThead.length; i++){
			theadTemp = (
				<th id={Ctbody[i]} key={"thead"+i.toString()} onClick={sortFunc.bind(null, Ctbody[i])} >
					{listThead[i]}
				</th>
			)
			theadTempOut.push(theadTemp)
		}
		theadOut = (
			<thead>
				<tr>
					{theadTempOut}
				</tr>
			</thead>
		)
		
		return theadOut
	}
	
	render() {
		const { display, output } = this.props

		if ( display == true && output.length > 0 ) {
			return (
				<div className="StageList">
					<table className={Ctable}>
						{this.generateTableHead()}
						{this.generateTableBody()}
					</table>
				</div>
			)
		} else {
			return null
		}
	}
}

StageList.propTypes = {
	charType: PropTypes.string,
	id: PropTypes.string,
	display: PropTypes.bool,
	day: PropTypes.number,
	output: PropTypes.array,
	sortFunc: PropTypes.func
}
