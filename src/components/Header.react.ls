require! {
	"react": React
}

{div, span, nav, button} = React.DOM

Header = React.createClass do
	displayName: "Header"

	render: ->
		div null,
			div className: "demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800",
				div className: "mdl-layout__header-row",
					span className: "mdl-layout-title", null
					div className: "mdl-layout-spacer", null
				div className: "demo-ribbon", null

module.exports = Header