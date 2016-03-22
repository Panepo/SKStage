require! {
	"lokijs": lokijs
	"events": { EventEmitter: EventEmitter }
	"object-assign": assign
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"../constants/ConstActions.ls": ConstActions
	"../constants/constants.ls": Constants
}

CHANGE_EVENT = 'change'

# ===============================================================================
# GLOBAL VARIABLES
# ===============================================================================
_data = {
	day: 0
}


# ===============================================================================
# INITIAL DATABASE
# ===============================================================================



# ===============================================================================
# APP STORE FUNCTIONS
# ===============================================================================
dayChange = (day) !->
	_data.day = day
	#if day is 0
	#	_data.output = sun
	#else if day is 1
	#	_data.output = mon
	#else if day is 2
	#	_data.output = tue
	#else if day is 3
	#	_data.output = wed
	#else if day is 4
	#	_data.output = thu
	#else if day is 5
	#	_data.output = fri
	#else if day is 6
	#	_data.output = sat

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
)

module.exports = AppStore