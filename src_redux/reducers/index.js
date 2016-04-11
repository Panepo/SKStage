import { combineReducers } from 'redux'
import { default as imageModel, getState } from './imageModel'

export function getImageState(state) {
	return getState(state.imageModel)
}

export default combineReducers({
	imageModel
})
