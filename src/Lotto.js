import React, { Component } from 'react'
import LottoBalls from './LottoBalls'

class Lotto extends Component {
	static defaultProps = {
		title: "default"
	}
	constructor(props) {
		super(props)

		this.state = {
			ballValues: [1, 2, 3]
		}
		this.generateLottoBalls = this.generateLottoBalls.bind(this)
	}

	generateLottoBalls() {
		let newBallValues = []
		while(newBallValues.length < this.props.balls) {
			let newRandomNum = Math.floor(Math.random() *40) +1;
			newBallValues.push(newRandomNum);
		}
		this.setState({ballValues: newBallValues})
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<LottoBalls ballValues={this.state.ballValues}/>
				<button onClick={this.generateLottoBalls}>Generate</button>
			</div>
		)
	}
}

export default Lotto