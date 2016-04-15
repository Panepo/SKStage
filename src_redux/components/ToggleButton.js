import React, { Component, PropTypes } from 'react'
import { CbuttonActive, CbuttonInactive } from '../constants/ClassName'

export default class NavButton extends Component {
	render() {
		const { display, title, onClickFunc, modelId } = this.props
		
		var bClassName = ""
		if ( display == true ) {
			bClassName = CbuttonActive
		} else {
			bClassName = CbuttonInactive
		}
		
		return (
			<div>
				<button className={bClassName} onClick={onClickFunc.bind(null, modelId)}>{title}</button>
			</div>
		)
	}
}

NavButton.propTypes = {
	display: PropTypes.bool,
	title: PropTypes.string,
	onClickFunc: PropTypes.func,
	modelId: PropTypes.string
}
