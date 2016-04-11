import React, { Component, PropTypes } from 'react'

export default class ImageModel extends Component {
	render() {
		const { imgSrc, display } = this.props

		if ( display === true ) {
			return (
				<div className="modal">
					<button className="close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
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

ImageModel.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	display: PropTypes.bool.isRequired
}
