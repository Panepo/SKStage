import { combineReducers } from 'redux'
import { default as imageModel } from './imageModel'
import { default as toggle } from './toggle'


export default combineReducers({
	imageModel,
	toggle
})
