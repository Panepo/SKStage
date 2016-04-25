import { combineReducers } from 'redux'
import { default as imageModel } from './imageModel'
import { default as toggle } from './toggle'
import { default as charBonus } from './charBonus'
import { default as dayModel } from './dayModel'
import { default as stageData } from './stageData'
import { default as typeBonus } from './typeBonus'

export default combineReducers({
	imageModel,
	toggle,
	charBonus,
	dayModel,
	stageData,
	typeBonus
})
