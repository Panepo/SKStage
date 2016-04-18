require! {
	"react": React
}

{div, a, small, footer} = React.DOM

Footer = React.createClass do
	displayName: "Footer"

	render: ->
		div null,
			footer className: "demo-footer mdl-mini-footer",
				div className: "mdl-mini-footer--left-section",
					div null,
						small null,
							"『"
							a href: "http://www.dmm.com/netgame_s/seiken/", "政剣マニフェスティア"
							"』(C) DMMゲームズ"
					div null,
						small null,
							"「政剣マニフェスティア」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。"
					div null,
						small null,
							"Copyright (C) Panepo@Github 2016 All Rights Reserved."

module.exports = Footer