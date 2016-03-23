require! {
	"lokijs": lokijs
	"events": { EventEmitter: EventEmitter }
	"object-assign": assign
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"../constants/ConstActions.ls": ConstActions
	"../constants/constants.ls": Constants
	"../raw/data.json": RawData
}

CHANGE_EVENT = 'change'

# ===============================================================================
# GLOBAL VARIABLES
# ===============================================================================
_data = {
	day: 0
	output: []
	toggle: [0 0 0 1 0 0]
}

# ===============================================================================
# INITIAL DATABASE
# ===============================================================================
db = new lokijs "db"
dbStage = db.addCollection "dbStage"

for data, i in RawData
	dbStage.insert data

stageFirstN = dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'N' }).simplesort('name').data()
stageFirstH = dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'H' }).simplesort('name').data()
stageSecondN = dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'N' }).simplesort('name').data()
stageSecondH = dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'H' }).simplesort('name').data()
stageThirdN = dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'N' })simplesort('name').data()
stageThirdH = dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'H' })simplesort('name').data()
_data.output = [stageFirstN, stageFirstH, stageSecondN, stageSecondH, stageThirdN, stageThirdH]

# ===============================================================================
# APP STORE FUNCTIONS
# ===============================================================================
dayChange = (day) !->
	_data.day = day

toggleChange = (toggle) !->
	_data.toggle = toggle

sortChange = (sortValue) !->
	stageFirstN = dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'N' }).simplesort(sortValue).data()
	stageFirstH = dbStage.chain().find({ 'stage': 1 }).find({ 'diff': 'H' }).simplesort(sortValue).data()
	stageSecondN = dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'N' }).simplesort(sortValue).data()
	stageSecondH = dbStage.chain().find({ 'stage': 2 }).find({ 'diff': 'H' }).simplesort(sortValue).data()
	stageThirdN = dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'N' })simplesort(sortValue).data()
	stageThirdH = dbStage.chain().find({ 'stage': 3 }).find({ 'diff': 'H' })simplesort(sortValue).data()
	_data.output = [stageFirstN, stageFirstH, stageSecondN, stageSecondH, stageThirdN, stageThirdH]


# ===============================================================================
# APP STORE MAIN
# ===============================================================================
AppStore = assign({}, EventEmitter.prototype, {
	getData: ->
		_data
	emitChange: !->
		@emit(CHANGE_EVENT)
	addChangeListener: (callback) !->
		@on(CHANGE_EVENT, callback)
	removeChangeListener: (callback) !->
		@removeListener(CHANGE_EVENT, callback)
})

# ===============================================================================
# APP DISPATCHER
# ===============================================================================
AppDispatcher.register( (action) !->
	switch action.actionType
	case ConstActions.dayChange
		dayChange(action.day)
		AppStore.emitChange()
	case ConstActions.toggleChange
		toggleChange(action.toggle)
		AppStore.emitChange()
	case ConstActions.sortChange
		sortChange(action.sortValue)
		AppStore.emitChange()
)

module.exports = AppStore