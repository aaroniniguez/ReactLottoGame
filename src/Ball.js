import React, { Component, useContext } from 'react'
import "./Ball.css"
import {ThemeContext} from "./App"

class Ball extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	render() {
		let style;
		let contextType = ThemeContext;
		console.log(contextType);
		if(this.props.theme === "dark") {
			style= {backgroundColor: "pink"};
		} else {
			style= {backgroundColor: "orange"};
		}
		return (
			<div>
				<ThemeContext.Consumer>
					{(value) => (
						<div style={style} className="Ball">
							{value}
							{this.props.val}
						</div>
					)
					}
				</ThemeContext.Consumer>
						<div style={style} className="Ball">
							{this.props.val}
						</div>
			</div>
		)
	}
}

export default Ball