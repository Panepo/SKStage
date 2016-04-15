import React, { Component, PropTypes } from 'react'
import { listThead } from '../constants/ConstantList'
import { Ctable, Ctbody } from '../constants/ClassName'

export default class StageList extends Component {
	render() {
		const { id, display, day, output } = this.props
		
		// ==================================================================
		// generate table head
		// ==================================================================
		var theadOut
		var theadTemp
		var theadTempOut = []
		for (var i=0; i<listThead.length; i++){
			theadTemp = (
				<th id={Ctbody[i]} key={"thead"+i.toString()}>
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
		
		// ==================================================================
		// generate table body
		// ==================================================================
		
		var tbodyOut
		var tbodyTemp
		var tbodyTempOut = []
		for (var i=0; i<output.length; i++) {
			var tdTemp
			var tdTempOut = []
			for (var j=0; j<Ctbody.length; j++) {
				tdTemp = (
					<td className={Ctbody[j]} key={"tbody"+i.toString()+j.toString()} >
						FQ
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
		
		// ==================================================================
		// render
		// ==================================================================
		if ( display == true ) {
			return (
				<div>
					<table className={Ctable}>
						{theadOut}
						{tbodyOut}
					</table>
				</div>
			)
		} else {
			return null
		}
	}
}

StageList.propTypes = {
	id: PropTypes.string,
	display: PropTypes.bool,
	day: PropTypes.string,
	output: PropTypes.array
}
