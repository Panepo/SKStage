import React, { Component, PropTypes } from 'react'

export default class CharModel extends Component {
	render() {
		const { input, text } = this.props
		
		var arrayTemp
		var outputTemp = []
		if ( input.length !== 0 ) {
			for ( var i=0; i < input.length; i++ ) {
				arrayTemp = (
					<div key={"imgtoday"+i.toString()}>
						<img className="menu-bonus-image" src={"./img/"+ input[i].image} height="90" width="90" />
					</div>
				)
				outputTemp.push(arrayTemp)
			}
			return (
				<div className="menu-bonus">
					<div className="menu-bonus-text">{text}</div>
					{outputTemp}
				</div>
			)
		} else {
			return null
		}
	}
}

CharModel.propTypes = {
	input: PropTypes.array,
	text: PropTypes.string
}
