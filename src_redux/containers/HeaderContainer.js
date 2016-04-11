import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CbuttonActive } from '../constants/ClassName'
import { getImageState } from '../reducers'
import ImageModel from '../components/ImageModel'
import '../css/Header.css'

class HeaderContainer extends Component {
	render() {
		const { imageState, modalOpen } = this.props
		
		return (
			<header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
				<ImageModel
					display={imageState[0]}
					imgSrc={"./img/char.jpg"} />
				<ImageModel
					display={imageState[1]}
					imgSrc={"./img/gift.jpg"} />
				<div className="mdl-layout__header-row">
					<span className="mdl-layout-title"></span>
					<div className="mdl-layout-spacer"></div>
					<nav className="mdl-navigation">
						<a className={CbuttonActive} href="http://wikiwiki.jp/seimani/">Wiki</a>
						<button className={CbuttonActive} >EXPボーナス日程表</button>
						<button className={CbuttonActive} >贈り物表</button>
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
		imageState: getImageState(state),
	}
}

export default connect(
	mapStateToProps
)(HeaderContainer)
