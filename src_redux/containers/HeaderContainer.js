import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CbuttonActive } from '../constants/ClassName'
import { modelOpen } from '../actions'
import ImgModel from '../components/ImgModel'
import '../css/Header.css'

class HeaderContainer extends Component {
	render() {
		const { imageState, modelOpen } = this.props
		
		return (
			<header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
				<ImgModel
					display={imageState[0]}
					imgSrc={"./img/char.jpg"} />
				<ImgModel
					display={imageState[1]}
					imgSrc={"./img/gift.jpg"} />
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
	imageState: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
	return {
		imageState: state.imageModel.modalDisplay,
	}
}

export default connect(
	mapStateToProps,
	{ modelOpen }
)(HeaderContainer)
