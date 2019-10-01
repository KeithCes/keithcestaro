import React from 'react'

class Logo extends React.Component {
	render() {
		return (
			<div className = "container">
				<img src = {this.props.imgSrc} alt = {this.props.alt} className = "logoImg"/>
				<div className = "logoText">
					<p>{this.props.text}</p>
				</div>
			</div>
		)
	}
}

export default Logo
