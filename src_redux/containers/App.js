import React, { Component } from 'react'
import HeaderContainer from './HeaderContainer'
import ContentContainer from './ContentContainer'
import FooterContainer from './FooterContainer'
import '../../css/App.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
					<HeaderContainer />
					<div className="demo-ribbon mdl-shadow--4dp" />
					<ContentContainer />
					<FooterContainer />
				</div>
			</div>
		)
	}
}
