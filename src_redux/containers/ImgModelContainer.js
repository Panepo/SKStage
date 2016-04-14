import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { modelClose } from '../actions'
import ImgModel from '../components/ImgModel'

class ImgModelContainer extends Component {
	render() {
		const { img0State, img1State, modelClose } = this.props
		
		return (
			<div>
				<ImgModel
					display={img0State}
					imgSrc={"./img/char.jpg"} 
					modelClose={() => modelClose('modal0')} />
				<ImgModel
					display={img1State}
					imgSrc={"./img/gift.jpg"}
					modelClose={() => modelClose('modal1')} />
			</div>
		)
	}
}

ImgModelContainer.propTypes = {
	img0State: PropTypes.bool.isRequired,
	img1State: PropTypes.bool.isRequired,
	modelClose: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		img0State: state.imageModel.modal0Display,
		img1State: state.imageModel.modal1Display
	}
}

export default connect(
	mapStateToProps,
	{ modelClose }
)(ImgModelContainer)
