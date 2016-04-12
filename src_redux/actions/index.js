import * as types from '../constants/ActionTypes'

export function modelOpen(modelId) {
	return {
		type: types.MODEL_OPEN,
		modelId
	}
}

