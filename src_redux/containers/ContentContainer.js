import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import '../css/Content.css'

class ContentContainer extends Component {
	render() {
		return (
			<main className="demo-main mdl-layout__content">
				<div className="demo-container mdl-grid">
					<div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
					<div className="content demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
						<h4>政剣マニフェスティア戦挙区効率表</h4>
						更新: 2016/03/24
					</div>
				</div>
			</main>
		)
	}
}

ContentContainer.propTypes = {

}

const mapStateToProps = (state) => {
	return {

	}
}

export default connect(
	mapStateToProps
)(ContentContainer)
