import {
	MODEL_OPEN,
	MODEL_CLOSE
} from '../constants/ActionTypes'

const initialState = {
	modal0Display: false,
	modal1Display: false
}

export default function imageModel(state = initialState, action) {
	switch (action.type) {
		case MODEL_OPEN:
			switch (action.modelId) {
				case 'modal0':
					return Object.assign({}, state, {
						modal0Display: true
					})
				case 'modal1':
					return Object.assign({}, state, {
						modal1Display: true
					})
			}
		case MODEL_CLOSE:
			switch (action.modelId) {
				case 'modal0':
					return Object.assign({}, state, {
						modal0Display: false
					})
				case 'modal1':
					return Object.assign({}, state, {
						modal1Display: false
					})
			}
		default:
			return state
	}
}
