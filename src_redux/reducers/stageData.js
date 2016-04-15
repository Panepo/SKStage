import {
	
} from '../constants/ActionTypes'

import lokijs from 'lokijs'
import StageData from '../raw/data.json'

var db = new lokijs('db')
var dbStage = db.addCollection("dbStage")

for (var i=0; i<StageData.length; i++) {
	dbStage.insert(StageData[i])
}

var stageFirstN = dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'N' }).simplesort('name').data()
var stageFirstH = dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'H' }).simplesort('name').data()
var stageSecondN = dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'N' }).simplesort('name').data()
var stageSecondH = dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'H' }).simplesort('name').data()
var stageThirdN = dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'N' }).simplesort('name').data()
var stageThirdH = dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'H' }).simplesort('name').data()

const initialState = {
	s1normal: stageFirstN,
	s1hard: stageFirstH,
	s2normal: stageSecondN,
	s2hard: stageSecondH,
	s3normal: stageThirdN,
	s3hard: stageThirdH
}

export default function stageData(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}
