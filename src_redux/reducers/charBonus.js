import lokijs from 'lokijs'
import CharData from '../raw/char.json'

var db = new lokijs('db')
var dbChar = db.addCollection("dbChar")

for (var i=0; i<CharData.length; i++) {
	dbChar.insert(CharData[i])
}

var today = new Date()
var localoffset = -(today.getTimezoneOffset()/60)

var destoffset = 5
var offset = destoffset - localoffset
var charTime = new Date( new Date().getTime() + offset * 3600 * 1000)
var charDay = charTime.getDate()
var bonusToday = dbChar.chain().find({ 'day': charDay }).data()

destoffset = 5 + 24
offset = destoffset - localoffset
charTime = new Date( new Date().getTime() + offset * 3600 * 1000)
charDay = charTime.getDate()
var bonusTomorrow = dbChar.chain().find({ 'day': charDay }).data()

const initialState = {
	bToday: bonusToday,
	bTomorrow: bonusTomorrow
}

export default function charBonus(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}
