import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { typeChange } from '../actions'
import CharModel from '../components/CharModel'

class NavChar extends Component {
	render() {
		const { bonus, typeChange, charType } = this.props
		
		return (
			<nav className="floating-menu2 mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
				<CharModel
					text={"今日EXP 2倍"}
					onClickFunc={(charType) => typeChange(charType)}
					charType={charType}
					input={bonus.bToday} />
				<CharModel
					text={"明日EXP 2倍"}
					onClickFunc={(charType) => typeChange(charType)}
					charType={charType}
					input={bonus.bTomorrow} />
			</nav>
		)
	}
}

NavChar.propTypes = {
	bonus: PropTypes.object.isRequired,
	charType: PropTypes.string.isRequired,
	typeChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		bonus: state.charBonus,
		charType: state.typeBonus.charType
	}
}

export default connect(
	mapStateToProps,
	{ typeChange }
)(NavChar)
