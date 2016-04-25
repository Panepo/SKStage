import {
	MODEL_OPEN,
	MODEL_CLOSE
} from '../constants/ConstActionTypes'

const initialState = {
	model0: false,
	model1: false
}

export default function imageModel(state = initialState, action) {
	switch (action.type) {
		case MODEL_OPEN:
			switch (action.modelId) {
				case 'model0':
					return Object.assign({}, state, {
						model0: true
					})
				case 'model1':
					return Object.assign({}, state, {
						model1: true
					})
			}
		case MODEL_CLOSE:
			switch (action.modelId) {
				case 'model0':
					return Object.assign({}, state, {
						model0: false
					})
				case 'model1':
					return Object.assign({}, state, {
						model1: false
					})
			}
		default:
			return state
	}
}
