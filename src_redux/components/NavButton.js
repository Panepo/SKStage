import React, { Component, PropTypes } from 'react'
import { CbuttonActive, CbuttonInactive } from '../constants/ClassName'

export default class NavButton extends Component {
	render() {
		const { display, title } = this.props
		
		var bClassName = ""
		if ( display == true ) {
			bClassName = CbuttonActive
		} else {
			bClassName = CbuttonInactive
		}
		
		return (
			<div>
				<button className={bClassName}>{title}</button>
			</div>
		)
	}
}

NavButton.propTypes = {
	display: PropTypes.bool,
	title: PropTypes.string
}
