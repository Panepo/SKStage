import React, { Component, PropTypes } from 'react'

export default class ImgModel extends Component {
	render() {
		const { imgSrc, display, modelClose } = this.props

		if ( display === true ) {
			return (
				<div className="modal">
					<button className="close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" onClick={modelClose} >
						<div className="material-icons">clear</div>
					</button>
					<img className="modal-content" src={imgSrc} />
				</div>
			)
		} else {
			return null
		}
	}
}

ImgModel.propTypes = {
	imgSrc: PropTypes.string,
	display: PropTypes.bool,
	modelClose: PropTypes.func
}
