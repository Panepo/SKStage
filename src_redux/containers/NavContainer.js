import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import NavButton from '../components/NavButton'
import { listStage, listStageS } from '../constants/ConstantList'
import '../css/Navigation.css'

class NavContainer extends Component {
	render() {
		const { toggle } = this.props
		
		var buttonTemp
		var buttonOut = []
		var keyString = ""
		for (var i=0; i<listStage.length; i++){
			keyString = "button" + i.toString()
			buttonTemp = (
				<NavButton
					key={keyString}
					display={toggle[listStageS[i]]}
					title={listStage[i]} />
			)
			buttonOut.push(buttonTemp)
		}
		
		return (
			<nav className="floating-menu mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
				<div className="menu-button">
					{buttonOut}
				</div>
			</nav>
		)
	}
}

NavContainer.propTypes = {
	toggle: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		toggle: state.toggle
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavContainer)
