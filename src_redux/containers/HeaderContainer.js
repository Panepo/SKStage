import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { modelOpen, modelClose } from '../actions'
import NavContainer from './NavContainer'
import ImgModel from '../components/ImgModel'
import { CbuttonActive } from '../constants/ClassName'
import '../css/Header.css'

class HeaderContainer extends Component {
	render() {
		const { imgState, modelOpen, modelClose } = this.props
		
		return (
			<header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
				<ImgModel
					display={imgState.model0}
					imgSrc={"./img/char.jpg"} 
					modelClose={() => modelClose('model0')} />
				<ImgModel
					display={imgState.model1}
					imgSrc={"./img/gift.jpg"}
					modelClose={() => modelClose('model1')} />
				<div className="mdl-layout__header-row">
					<span className="mdl-layout-title"></span>
					<div className="mdl-layout-spacer"></div>
					<nav className="mdl-navigation">
						<a className={CbuttonActive} href="http://wikiwiki.jp/seimani/">Wiki</a>
						<button className={CbuttonActive} onClick={() => modelOpen('model0')}>
							EXPボーナス日程表
						</button>
						<button className={CbuttonActive} onClick={() => modelOpen('model1')}>
							贈り物表
						</button>
					</nav>
				</div>
				<NavContainer />
			</header>
		)
	}
}

HeaderContainer.propTypes = {
	imgState: PropTypes.object.isRequired,
	modelOpen: PropTypes.func.isRequired,
	modelClose: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		imgState: state.imageModel
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		modelOpen: bindActionCreators(modelOpen, dispatch),
		modelClose: bindActionCreators(modelClose, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer)
