import React from 'react'

class Contact extends React.Component {
	render() {
		return (
			<div className = "contactDiv">
				<h1 className = "sectionTitle">CONTACT</h1>
				<p className = "contactInfo">
					EMAIL: <a href = "mailto:cestaro.k@husky.neu.edu">cestaro.k@husky.neu.edu</a>
				</p>
				<p className = "contactInfo">
					PHONE: 860-391-2545
				</p>
			</div>
		)
	}
}

export default Contact