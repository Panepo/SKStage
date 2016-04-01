require! {
	"react": React
	"react": { PropTypes: ReactPropTypes }
	"./Navigation.react.ls": Navigation
	"../constants/constants.ls": Constants
	"../css/Header.css"
}

{div, span, nav, a, header, button, img, i} = React.DOM

Navigation = React.createFactory Navigation

Header = React.createClass do
	displayName: "Header"
	
	propTypes:
		toggle: ReactPropTypes.array.isRequired
		bonus: ReactPropTypes.array.isRequired
	
	handleClick: (input) !->
		target = document.getElementById input
		target.style.display = "block"
	
	handleClose: (input) !->
		target = document.getElementById input
		target.style.display = "none"
	
	render: ->
		header className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
			div className: "modal", id: "modal1",
				button className: "close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect",  onClick: @handleClose.bind(null, "modal1"),
					i className: "material-icons", "clear"
				img className: "modal-content", src: "./img/char.jpg", null
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
			Navigation {
				toggle:@props.toggle
				bonus:@props.bonus
			}, null

module.exports = Header