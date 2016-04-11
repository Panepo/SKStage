import {
	modelOpen,
	modelClose
} from '../constants/ActionTypes'

const initialState = {
	modalDisplay: [false, false]
}

export default function imageModel(state = initialState, action) {
	switch (action.type) {
		case modelOpen:
			switch (action.modalID) {
				case 'modal0':
					return state.modalDisplay[0] = true
				case 'modal1':
					return state.modalDisplay[1] = true
			}
		case modelClose:
			switch (action.modalID) {
				case 'modal0':
					return state.modalDisplay[0] = false
				case 'modal1':
					return state.modalDisplay[1] = false
			}
		default:
			return state
	}
}

export function getState(state) {
	return state.modalDisplay
}