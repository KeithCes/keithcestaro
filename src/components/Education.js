import React from 'react'
import Job from './Job'

class Education extends React.Component {
	render() {
		return (
			<div className = "sectionDiv">
				<h1 className = "sectionTitle">EDUCATION</h1>
				<Job 
					jobTitle = "Northeastern University" 
					jobImg = {require("./img/resumePics/neu.jpg")} 
					jobDate = "Graduating 2021"
					jobDesc = "Computer Science and Finance, BS"
				/>
				<Job 
					jobTitle = "Xavier High School" 
					jobImg = {require("./img/resumePics/xavier.png")} 
					jobDate = "Graduated 2017"
				/>
			</div>
		)
	}
}

export default Education