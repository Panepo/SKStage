require! {
	"react-dom": ReactDOM
	"react": React
	"./components/SKStageApp.react.ls": SKStageApp
}
ReactDOM.render (React.createElement SKStageApp, null), document.getElementById "SKStageApp"
