import {
	TOGGLE_CHANGE
} from '../constants/ConstActionTypes'

const initialState = {
	all: false,
	s1normal: false,
	s1hard: false,
	s2normal: false,
	s2hard: false,
	s2twist: false,
	s3normal: false,
	s3hard: false,
	s4normal: false,
	s4hard: true,
	s5normal: false,
	s5hard: false
}

export default function toggle(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_CHANGE:
			switch (action.toggleId) {
				case "all":
					if ( state.all === false ) {
						return Object.assign({}, state, {
							all: true,
							s1normal: true,
							s1hard: true,
							s2normal: true,
							s2hard: true,
							s2twist: true,
							s3normal: true,
							s3hard: true,
							s4normal: true,
							s4hard: true,
							s5normal: true,
							s5hard: true
						})
					} else {
						return Object.assign({}, state, {
							all: false,
							s1normal: false,
							s1hard: false,
							s2normal: false,
							s2hard: false,
							s2twist: false,
							s3normal: false,
							s3hard: false,
							s4normal: false,
							s4hard: false,
							s5normal: false,
							s5hard: false
						})
					}
				case "s1normal":
					if ( state.s1normal === false ) {
						return Object.assign({}, state, {
							s1normal: true
						})
					} else {
						return Object.assign({}, state, {
							s1normal: false
						})
					}
				case "s1hard":
					if ( state.s1hard === false ) {
						return Object.assign({}, state, {
							s1hard: true
						})
					} else {
						return Object.assign({}, state, {
							s1hard: false
						})
					}
				case "s2normal":
					if ( state.s2normal === false ) {
						return Object.assign({}, state, {
							s2normal: true
						})
					} else {
						return Object.assign({}, state, {
							s2normal: false
						})
					}
				case "s2hard":
					if ( state.s2hard === false ) {
						return Object.assign({}, state, {
							s2hard: true
						})
					} else {
						return Object.assign({}, state, {
							s2hard: false
						})
					}
				case "s2twist":
					if ( state.s2twist === false ) {
						return Object.assign({}, state, {
							s2twist: true
						})
					} else {
						return Object.assign({}, state, {
							s2twist: false
						})
					}
				case "s3normal":
					if ( state.s3normal === false ) {
						return Object.assign({}, state, {
							s3normal: true
						})
					} else {
						return Object.assign({}, state, {
							s3normal: false
						})
					}
				case "s3hard":
					if ( state.s3hard === false ) {
						return Object.assign({}, state, {
							s3hard: true
						})
					} else {
						return Object.assign({}, state, {
							s3hard: false
						})
					}
				case "s4normal":
					if ( state.s4normal === false ) {
						return Object.assign({}, state, {
							s4normal: true
						})
					} else {
						return Object.assign({}, state, {
							s4normal: false
						})
					}
				case "s4hard":
					if ( state.s4hard === false ) {
						return Object.assign({}, state, {
							s4hard: true
						})
					} else {
						return Object.assign({}, state, {
							s4hard: false
						})
					}
				case "s5normal":
					if ( state.s5normal === false ) {
						return Object.assign({}, state, {
							s5normal: true
						})
					} else {
						return Object.assign({}, state, {
							s5normal: false
						})
					}
				case "s5hard":
					if ( state.s5hard === false ) {
						return Object.assign({}, state, {
							s5hard: true
						})
					} else {
						return Object.assign({}, state, {
							s5hard: false
						})
					}
			}
		default:
			return state
	}
}
