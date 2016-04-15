import { combineReducers } from 'redux'
import { default as imageModel } from './imageModel'
import { default as toggle } from './toggle'
import { default as charBonus } from './charBonus'

export default combineReducers({
	imageModel,
	toggle,
	charBonus
})
