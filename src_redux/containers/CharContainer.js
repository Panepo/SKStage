import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CharModel from '../components/CharModel'

class CharContainer extends Component {
	render() {
		const { bonus } = this.props
		
		return (
			<nav className="floating-menu2 mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
				<CharModel
					text={"今日EXP 2倍"}
					input={bonus.bToday} />
				<CharModel
					text={"明日EXP 2倍"}
					input={bonus.bTomorrow} />
			</nav>
		)
	}
}

CharContainer.propTypes = {
	bonus: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		bonus: state.charBonus
	}
}

export default connect(
	mapStateToProps
)(CharContainer)
