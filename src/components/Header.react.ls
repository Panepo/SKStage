require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"../constants/constants.ls": Constants
	"../css/Header.css"
}

{div, span, nav, a, header, button, img, i} = React.DOM

Header = React.createClass do
	displayName: "Header"
	
	getInitialState: -> {
		modal1Display: false
		modal2Display: false
	}
	
	handleClick: (input) !->
		switch input
		case "modal1"
			@setState { modal1Display: true }
		case "modal2"
			@setState { modal2Display: true }
	
	handleClose: (input) !->
		switch input
		case "modal1"
			@setState { modal1Display: false }
		case "modal2"
			@setState { modal2Display: false }
	
	render: ->
		header className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
			if @state.modal1Display is true
				div className: "modal", id: "modal1",
					button className: "close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect",  onClick: @handleClose.bind(null, "modal1"),
						i className: "material-icons", "clear"
					img className: "modal-content", src: "./img/char.jpg", null
			if @state.modal2Display is true
				div className: "modal", id: "modal2",
					button className: "close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect",  onClick: @handleClose.bind(null, "modal2"),
						i className: "material-icons", "clear"
					img className: "modal-content", src: "./img/gift.jpg", null
			div className: "mdl-layout__header-row",
				span className: "mdl-layout-title", null
				div className: "mdl-layout-spacer", null
				nav className: "mdl-navigation",
					a className: Constants.buttonClassActive, href: "http://wikiwiki.jp/seimani/", "Wiki"
					button className: Constants.buttonClassActive, onClick: @handleClick.bind(null, "modal1"), "EXPボーナス日程表"
					button className: Constants.buttonClassActive, onClick: @handleClick.bind(null, "modal2"), "贈り物表"

module.exports = Header