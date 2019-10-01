import React from 'react'
import Job from './Job'

class Experience extends React.Component {
	render() {
		return (
			<div className = "sectionDiv">
				<h1 className = "sectionTitle">EXPERIENCE</h1>
				<div className = "resumeContainer">
					<Job 
						jobTitle = "Massachusetts Medical Society" 
						jobDesc = "Worked with both manual and automatic quality assurance methods to ensure optimal performance of shipped products; worked in multiple agile SCRUM teams, performed automation in Ruby" 
						jobImg = {require("./img/resumePics/mms.jpg")} 
						jobRole = "Quality Assurance Co-op"
						jobDate = "January 2019 - June 2019"
					/>
					<Job 
						jobTitle = "Currency Exchange International" 
						jobDesc = "Oversaw and exchanged foreign currencies; managed over $60,000 worth of various currencies" 
						jobImg = {require("./img/resumePics/cxi.png")} 
						jobRole = "Teller"
						jobDate = "July 2018 - February 2019"
					/>
				</div>
				<div className = "resumeContainer">
					<Job 
						jobTitle = "Northeast Wealth Solutions, LLC" 
						jobDesc = "Summer internship, helped with tech support and management of mutual funds" 
						jobImg = {require("./img/resumePics/ne.png")} 
						jobRole = "Intern"
						jobDate = "June 2016 - August 2016"
					/>
					<Job 
						jobTitle = "Old Saybrook Fire Department" 
						jobDesc = "Responsible for junior division budget in excess of $10,000, participated in weekly drills in fire department safety techniques and rescues; completed EMT training" 
						jobImg = {require("./img/resumePics/osfd.png")} 
						jobRole = "Volunteer"
						jobDate = "January 2013 - July 2018"
					/>
				</div>
			</div>
		)
	}
}

export default Experience
