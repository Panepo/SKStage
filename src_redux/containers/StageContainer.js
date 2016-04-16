import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import StageList from '../components/StageList'
import { listStage, listStageS } from '../constants/ConstantList'
import '../css/StageList.css'


class StageContainer extends Component {
	render() {
		const { toggle, day, stageData } = this.props
		
		var stageTemp
		var stageOut = []
		for (var i=1; i<listStage.length; i++){
			stageTemp = (
				<StageList
					key={"stage" + i.toString()}
					id={"stage" + i.toString()}
					display={toggle[listStageS[i]]}
					day={day.day}
					output={stageData[listStageS[i]]} />
			)
			stageOut.push(stageTemp)
		}
		
		return (
			<div>
				{stageOut}
			</div>
		)
	}
}

StageContainer.propTypes = {
	day: PropTypes.object.isRequired,
	toggle: PropTypes.object.isRequired,
	stageData: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		toggle: state.toggle,
		day: state.dayModel,
		stageData: state.stageData
	}
}

export default connect(
	mapStateToProps
)(StageContainer)
