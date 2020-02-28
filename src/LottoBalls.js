import React, { PureComponent } from 'react'
import Ball from './Ball'

class LottoBalls extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

	render() {
		console.log(this.props.ballValues)
		return (
			<div>
				{
					this.props.ballValues.map((ball) => <Ball val={ball}/>)
				}
			</div>
		)
	}
}

export default LottoBalls