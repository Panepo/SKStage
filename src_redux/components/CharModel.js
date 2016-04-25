import React, { Component, PropTypes } from 'react'

export default class CharModel extends Component {
	render() {
		const { input, text, onClickFunc, charType} = this.props
		
		var arrayTemp
		var outputTemp = []
		var classTemp = ""
		if ( input.length !== 0 ) {
			for ( var i=0; i < input.length; i++ ) {
				if ( charType === input[i].type || charType === 'none') {
					classTemp = "menu-bonus-image img-active"
				} else {
					classTemp = "menu-bonus-image img-inactive"
				}
				
				arrayTemp = (
					<button className="img-button mdl-button mdl-js-button mdl-js-ripple-effect" key={+i.toString()} onClick={onClickFunc.bind(null, input[i].type)} >
						<img className={classTemp} src={"./img/"+ input[i].image} alt={input[i].name}/>
					</button>
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
	charType: PropTypes.string,
	input: PropTypes.array,
	text: PropTypes.string,
	onClickFunc: PropTypes.func
}
