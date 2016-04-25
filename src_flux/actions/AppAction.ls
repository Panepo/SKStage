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
	sortChange: (sortValue) !->
		AppDispatcher.dispatch(
			actionType: ConstActions.sortChange
			sortValue: sortValue
			)
	typeChange: (charType) !->
		AppDispatcher.dispatch(
			actionType: ConstActions.typeChange
			charType: charType
			)
	
module.exports = AppAction
