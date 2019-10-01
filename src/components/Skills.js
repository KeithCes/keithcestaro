import React from 'react'
import Logo from './Logo'

class Skills extends React.Component {
	render() {
		return (
			<div className = "skillsDiv">
				<h1 className = "sectionTitle">SKILLS</h1>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/python-logo.png")} alt = "logo" text = "Python"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/javascript-logo.png")} alt = "logo" text = "Javascript"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/Swift.png")} alt = "logo" text = "Swift"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/React.png")} alt = "logo" text = "React"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/html.png")} alt = "logo" text = "HTML"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/css.png")} alt = "logo" text = "CSS"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/Ruby.png")} alt = "logo" text = "Ruby"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/Xcode.png")} alt = "logo" text = "Xcode"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/java.png")} alt = "logo" text = "Java"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/jira.png")} alt = "logo" text = "Jira"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/mysql.png")} alt = "logo" text = "MySQL"/>
				</div>
				<div className = "logoContainer">
					<Logo imgSrc = {require("./img/logos/ps-logo.png")} alt = "logo" text = "Adobe Photoshop"/>
				</div>
			</div>
		)
	}
}

export default Skills
