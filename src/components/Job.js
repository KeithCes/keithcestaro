import React from 'react'

class Job extends React.Component {
	render() {
		return (
			<div className = "jobDiv">
				<img src = {this.props.jobImg} alt = "job" className = "jobImg"/>
				<h2 className = "jobTitle">
					{this.props.jobTitle}
				</h2>
				<p className = "jobRole">
					<i>{this.props.jobRole}</i>
				</p>
				<p className = "jobDate">
					<i>{this.props.jobDate}</i>
				</p>
				<p className = "jobDesc">
					{this.props.jobDesc}
				</p>
			</div>
		)
	}
}

export default Job
