import React, { PureComponent } from 'react'

class WiseSquare extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			
		}
	}

	dispenseWisdom() {
		let messages = ["testestste"]
		let rIndex = Math.floor(Math.random() * messages.length);
		console.log(messages[rIndex])
	}

	render() {
		return (
			<div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>  
			:D
			</div>
		)
	}
}

export default WiseSquare