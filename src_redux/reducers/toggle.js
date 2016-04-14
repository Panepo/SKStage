import {

} from '../constants/ActionTypes'

const initialState = {
	all: false,
	s1normal: false,
	s1hard: false,
	s2normal: false,
	s2hard: false,
	s3normal: false,
	s3hard: true
}

export default function toggle(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}
