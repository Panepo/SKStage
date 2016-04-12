import {
	MODEL_OPEN,
	MODEL_CLOSE
} from '../constants/ActionTypes'

const initialState = {
	modalDisplay: [false, false]
}

export default function imageModel(state = initialState, action) {
	switch (action.type) {
		case MODEL_OPEN:
			switch (action.modelId) {
				case 'modal0':
					state.modalDisplay[0] = true
					return state
				case 'modal1':
					state.modalDisplay[1] = true
					return state
			}
		case MODEL_CLOSE:
			switch (action.modelId) {
				case 'modal0':
					state.modalDisplay[0] = false
					return state
				case 'modal1':
					state.modalDisplay[1] = false
					return state
			}
		default:
			return state
	}
}