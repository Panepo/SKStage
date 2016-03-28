require! {
	"react": React
	"../constants/constants.ls": Constants
	"../css/Header.css"
}

{div, span, nav, a} = React.DOM

Header = React.createClass do
	displayName: "Header"
	
	render: ->
		div null,
			div className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
				div className: "mdl-layout__header-row",
					span className: "mdl-layout-title", null
					div className: "mdl-layout-spacer", null
					nav className: "mdl-navigation",
						a className: Constants.buttonClassActive, href: "http://wikiwiki.jp/seimani/", "Wiki"
						a className: Constants.buttonClassActive, href: "./img/char.jpg", "EXPボーナス日程表"
						a className: Constants.buttonClassActive, href: "./img/gift.jpg", "贈り物表"
				div className: "demo-ribbon", null

module.exports = Header