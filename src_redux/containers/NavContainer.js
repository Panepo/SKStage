import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { toggleChange } from '../actions'
import ToggleButton from '../components/ToggleButton'
import { listStage, listStageS } from '../constants/ConstList'
import '../../css/Navigation.css'

class NavContainer extends Component {
	render() {
		const { toggle, toggleChange } = this.props
		
		var buttonTemp
		var buttonOut = []
		for (var i=0; i<listStage.length; i++){
			buttonTemp = (
				<ToggleButton
					key={"navButton" + i.toString()}
					modelId={listStageS[i]}
					display={toggle[listStageS[i]]}
					onClickFunc={(modelId) => toggleChange(modelId)}
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
	toggle: PropTypes.object.isRequired,
	toggleChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		toggle: state.toggle
	}
}

export default connect(
	mapStateToProps,
	{ toggleChange }
)(NavContainer)
