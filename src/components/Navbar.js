import React from 'react'

class Navbar extends React.Component {
	render() {
		return (
			<div className="topnav">
			  <a href="#home">Home</a>
			  <a href="#skills">Skills</a>
			  <a href="#experience">Experience</a>
			  <a href="#education">Education</a>
			  <a href="#about-me">About Me</a>
			  <a href="#contact">Contact</a>
			</div>
		)
	}
}

export default Navbar
