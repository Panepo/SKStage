require! {
	"lokijs": lokijs
	"events": { EventEmitter: EventEmitter }
	"object-assign": assign
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"../constants/ConstActions.ls": ConstActions
	"../constants/constants.ls": Constants
	"../raw/data.json": StageData
	"../raw/char.json": CharData
}

CHANGE_EVENT = 'change'
# ===============================================================================
# INITIAL DATABASE
# ===============================================================================
db = new lokijs "db"
dbStage = db.addCollection "dbStage"

for data in StageData
	dbStage.insert data

dbChar = db.addCollection "dbChar"

for data in CharData
	dbChar.insert data

# ===============================================================================
# APPSTORE VALUES
# ===============================================================================
_data = {
	day: 0
	output: []
	toggle: [0 0 0 0 0 1]
	bonus: []
}

# ========== Values Initial ==========
# _data.day
today = new Date!
localoffset = -(today.getTimezoneOffset()/60)

destoffset = 9
offset = destoffset - localoffset
stageTime = new Date( new Date().getTime() + offset * 3600 * 1000)
stageDay = stageTime.getDay!
_data.day = stageDay

# ========== Values Initial ==========
# _data.bonus
destoffset = 5
offset = destoffset - localoffset
charTime = new Date( new Date().getTime() + offset * 3600 * 1000)
charDay = charTime.getDate!
bonusToday = dbChar.chain!.find({ 'day': charDay }).data!

destoffset = 5 + 24
offset = destoffset - localoffset
charTime = new Date( new Date().getTime() + offset * 3600 * 1000)
charDay = charTime.getDate!
bonusTomorrow = dbChar.chain!.find({ 'day': charDay }).data!

_data.bonus = [bonusToday, bonusTomorrow]

# ========== Values Initial ==========
# _data.output
stageFirstN = dbStage.chain!.find({ 'stage': 1 }).find({ 'diff': 'N' }).simplesort('name').data!
stageFirstH = dbStage.chain!.find({ 'stage': 1 }).find({ 'diff': 'H' }).simplesort('name').data!
stageSecondN = dbStage.chain!.find({ 'stage': 2 }).find({ 'diff': 'N' }).simplesort('name').data!
stageSecondH = dbStage.chain!.find({ 'stage': 2 }).find({ 'diff': 'H' }).simplesort('name').data!
stageThirdN = dbStage.chain!.find({ 'stage': 3 }).find({ 'diff': 'N' })simplesort('name').data!
stageThirdH = dbStage.chain!.find({ 'stage': 3 }).find({ 'diff': 'H' })simplesort('name').data!
_data.output = [stageFirstN, stageFirstH, stageSecondN, stageSecondH, stageThirdN, stageThirdH]

# ===============================================================================
# APPSTORE FUNCTIONS
# ===============================================================================
dayChange = (day) !->
	_data.day = day

toggleChange = (toggle) !->
	_data.toggle = toggle

sortChange = (sortValue) !->
	stageFirstN = dbStage.chain!.find({ 'stage': 1 }).find({ 'diff': 'N' }).simplesort(sortValue).data!
	stageFirstH = dbStage.chain!.find({ 'stage': 1 }).find({ 'diff': 'H' }).simplesort(sortValue).data!
	stageSecondN = dbStage.chain!.find({ 'stage': 2 }).find({ 'diff': 'N' }).simplesort(sortValue).data!
	stageSecondH = dbStage.chain!.find({ 'stage': 2 }).find({ 'diff': 'H' }).simplesort(sortValue).data!
	stageThirdN = dbStage.chain!.find({ 'stage': 3 }).find({ 'diff': 'N' })simplesort(sortValue).data!
	stageThirdH = dbStage.chain!.find({ 'stage': 3 }).find({ 'diff': 'H' })simplesort(sortValue).data!
	_data.output = [stageFirstN, stageFirstH, stageSecondN, stageSecondH, stageThirdN, stageThirdH]

# ===============================================================================
# APPSTORE MAIN
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
		dayChange action.day
		AppStore.emitChange!
	case ConstActions.toggleChange
		toggleChange action.toggle
		AppStore.emitChange!
	case ConstActions.sortChange
		sortChange action.sortValue
		AppStore.emitChange!
)

module.exports = AppStore