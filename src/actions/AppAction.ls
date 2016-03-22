require! {
	"../dispatcher/AppDispatcher.ls": AppDispatcher
	"../constants/ConstActions.ls": ConstActions
}

AppAction = 
	toggleChange: (toggle) !->
		AppDispatcher.dispatch(
			actionType: ConstActions.toggleChange
			toggle: toggle
			)
	dayChange: (day) !->
		AppDispatcher.dispatch(
			actionType: ConstActions.dayChange
			day: day
			)

module.exports = AppAction
