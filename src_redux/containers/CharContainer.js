import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class CharContainer extends Component {
	render() {
		const { bonus } = this.props
		
		var TodayOut
		var TodayTemp
		var TodayTempOut = []
		if ( bonus.bToday.length !== 0 ) {
			for ( var i=0; i<bonus.bToday.length; i++ ) {
				TodayTemp = (
					<div key={"imgtoday"+i.toString()}>
						<img className="menu-bonus-image" src={"./img/"+ bonus.bToday[i].image} height="90" width="90" />
					</div>
				)
				TodayTempOut.push(TodayTemp)
			}
			TodayOut = (
				<div className="menu-bonus">
					<div className="menu-bonus-text">今日EXP 2倍</div>
					{TodayTempOut}
				</div>
			)
		}
		
		var TomorrowOut
		var TomorrowTemp
		var TomorrowTempOut = []
		if ( bonus.bTomorrow.length !== 0 ) {
			for ( var i=0; i<bonus.bTomorrow.length; i++ ) {
				TomorrowTemp = (
					<div key={"imgtoday"+i.toString()}>
						<img className="menu-bonus-image" src={"./img/"+ bonus.bTomorrow[i].image} height="90" width="90" />
					</div>
				)
				TomorrowTempOut.push(TomorrowTemp)
			}
			TomorrowOut = (
				<div className="menu-bonus">
					<div className="menu-bonus-text">明日EXP 2倍</div>
					{TomorrowTempOut}
				</div>
			)
		}
		
		return (
			<nav className="floating-menu2 mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
				{TodayOut}
				{TomorrowOut}
			</nav>
		)
	}
}

CharContainer.propTypes = {
	bonus: PropTypes.arrayOf(PropTypes.shape({
		bToday: PropTypes.array.isRequired,
		bTomorrow: PropTypes.array.isRequired,
	})).isRequired
}

const mapStateToProps = (state) => {
	return {
		bonus: state.charBonus
	}
}

export default connect(
	mapStateToProps
)(CharContainer)
