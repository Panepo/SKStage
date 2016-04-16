import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { dayChange } from '../actions'
import StageContainer from './StageContainer'
import ToggleButton from '../components/ToggleButton'
import { listTab } from '../constants/ConstantList'
import '../css/Content.css'

class ContentContainer extends Component {
	render() {
		const { day, dayChange } = this.props
		
		var buttonTemp
		var buttonOut = []
		var display = false
		for (var i=0; i<listTab.length; i++){
			if ( day.day == i ) {
				display = true
			} else {
				display = false
			}
			
			buttonTemp = (
				<ToggleButton
					key={"contButton" + i.toString()}
					modelId={i.toString()}
					display={display}
					onClickFunc={(modelId) => dayChange(modelId)}
					title={listTab[i]} />
			)
			buttonOut.push(buttonTemp)
		}
		
		return (
			<main className="demo-main mdl-layout__content">
				<div className="demo-container mdl-grid">
					<div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
					<div className="content demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
						<h4>政剣マニフェスティア戦挙区効率表</h4>
						更新: 2016/04/13
						<div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
							<div className="mdl-tabs__tab-bar">
								{buttonOut}
							</div>
							<StageContainer />
						</div>
					</div>
				</div>
			</main>
		)
	}
}

ContentContainer.propTypes = {
	day: PropTypes.object.isRequired,
	dayChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		day: state.dayModel
	}
}

export default connect(
	mapStateToProps,
	{ dayChange }
)(ContentContainer)
