import * as types from '../constants/ActionTypes'

export function modelOpen(modelId) {
	return {
		type: types.MODEL_OPEN,
		modelId
	}
}

export function modelClose(modelId) {
	return {
		type: types.MODEL_CLOSE,
		modelId
	}
}

export function toggleChange(toggleId) {
	return {
		type: types.TOGGLE_CHANGE,
		toggleId
	}
}

export function dayChange(dayId) {
	return {
		type: types.DAY_CHANGE,
		dayId
	}
}
