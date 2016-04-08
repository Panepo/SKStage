import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { CbuttonActive } from '../constants/ClassName'
import '../css/Header.css'

class HeaderContainer extends Component {
	render() {
		return (
			<header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
				<div className="mdl-layout__header-row">
					<span className="mdl-layout-title"></span>
					<div className="mdl-layout-spacer"></div>
					<nav className="mdl-navigation">
						<a className={CbuttonActive} href="http://wikiwiki.jp/seimani/">Wiki</a>
						<button className={CbuttonActive}>EXPボーナス日程表</button>
						<button className={CbuttonActive}>贈り物表</button>
					</nav>
				</div>
			</header>
		)
	}
}

HeaderContainer.propTypes = {

}

const mapStateToProps = (state) => {
	return {

	}
}

export default connect(
	mapStateToProps
)(HeaderContainer)
