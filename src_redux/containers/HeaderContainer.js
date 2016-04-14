import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CbuttonActive } from '../constants/ClassName'
import { modelOpen, modelClose } from '../actions'
import ImgModel from '../components/ImgModel'
import '../css/Header.css'

class HeaderContainer extends Component {
	render() {
		const { img0State, img1State, modelOpen, modelClose } = this.props
		
		return (
			<header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
				<ImgModel
					display={img0State}
					imgSrc={"./img/char.jpg"} 
					modelClose={() => modelClose('modal0')} />
				<ImgModel
					display={img1State}
					imgSrc={"./img/gift.jpg"}
					modelClose={() => modelClose('modal1')} />
				<div className="mdl-layout__header-row">
					<span className="mdl-layout-title"></span>
					<div className="mdl-layout-spacer"></div>
					<nav className="mdl-navigation">
						<a className={CbuttonActive} href="http://wikiwiki.jp/seimani/">Wiki</a>
						<button className={CbuttonActive} onClick={() => modelOpen('modal0')}>
							EXPボーナス日程表
						</button>
						<button className={CbuttonActive} onClick={() => modelOpen('modal1')}>
							贈り物表
						</button>
					</nav>
				</div>
			</header>
		)
	}
}

HeaderContainer.propTypes = {
	img0State: PropTypes.bool.isRequired,
	img1State: PropTypes.bool.isRequired,
	modelOpen: PropTypes.func.isRequired,
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
	{ modelOpen, modelClose }
)(HeaderContainer)
