import {
	DAY_CHANGE
} from '../constants/ConstActionTypes'

var today = new Date()
var localoffset = -(today.getTimezoneOffset()/60)

var destoffset = 9
var offset = destoffset - localoffset
var stageTime = new Date( new Date().getTime() + offset * 3600 * 1000)
var stageDay = stageTime.getDay()

const initialState = {
	day: stageDay
}

export default function dayModel(state = initialState, action) {
	switch (action.type) {
		case DAY_CHANGE:
			switch (action.dayId) {
				case "0":
					return Object.assign({}, state, {
						day: 0
					})
				case "1":
					return Object.assign({}, state, {
						day: 1
					})
				case "2":
					return Object.assign({}, state, {
						day: 2
					})
				case "3":
					return Object.assign({}, state, {
						day: 3
					})
				case "4":
					return Object.assign({}, state, {
						day: 4
					})
				case "5":
					return Object.assign({}, state, {
						day: 5
					})
				case "6":
					return Object.assign({}, state, {
						day: 6
					})
			}
		default:
			return state
	}
}
