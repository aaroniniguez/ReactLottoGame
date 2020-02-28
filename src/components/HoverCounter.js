import React, { PureComponent } from 'react'
import UpdatedComponent from "./withCounter";

class HoverCounter extends PureComponent {

	render() {
		const {count, incrementCount} = this.props;
		return (
			<div>
				<h2 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</h2>
			</div>		
		)
	}
}

export default UpdatedComponent(HoverCounter)