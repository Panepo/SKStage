import {
	TYPE_CHANGE
} from '../constants/ConstActionTypes'

const initialState = {
	charType: 'none'
}

export default function typeBonus(state = initialState, action) {
	switch (action.type) {
		case TYPE_CHANGE:
			if (state.charType === action.charType) {
				return Object.assign({}, state, {
					charType: 'none'
				})
			} else {
				return Object.assign({}, state, {
					charType: action.charType
				})
			}
		default:
			return state
	}
}
