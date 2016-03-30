require! {
	"react": React
	"react-dom": ReactDOM
	"react-dom": {findDOMNode: findDOMNode}
	"../constants/constants.ls": Constants
	"../css/Header.css"
	"../image/char.jpg": imageChar
	"../image/gift.jpg": imageGift
}

{div, span, nav, a, header, button, img, i} = React.DOM

Header = React.createClass do
	displayName: "Header"
	
	handleClick: (input) !->
		target = document.getElementById input
		target.style.display = "block"
	
	handleClose: (input) !->
		target = document.getElementById input
		target.style.display = "none"
	
	render: ->
		div null,
			div className: "modal", id: "modal1",
				button className: "close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored",  onClick: @handleClose.bind(null, "modal1"),
					i className: "material-icons", "clear"
				img className: "modal-content", src: imageGift, null
			div className: "modal", id: "modal2",
				button className: "close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored",  onClick: @handleClose.bind(null, "modal2"),
					i className: "material-icons", "clear"
				img className: "modal-content", src: imageChar, null
			header className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800 mdl-shadow--4dp",
				div className: "mdl-layout__header-row",
					span className: "mdl-layout-title", null
					div className: "mdl-layout-spacer", null
					nav className: "mdl-navigation",
						a className: Constants.buttonClassActive, href: "http://wikiwiki.jp/seimani/", "Wiki"
						button className: Constants.buttonClassActive, onClick: @handleClick.bind(null, "modal1"), "EXPボーナス日程表"
						button className: Constants.buttonClassActive, onClick: @handleClick.bind(null, "modal2"), "贈り物表"
				div className: "demo-ribbon", null

module.exports = Header