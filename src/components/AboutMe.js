import React from 'react'

class AboutMe extends React.Component {
	render() {
		return (
			<div className = "sectionDiv">
				<h1 className = "sectionTitle">ABOUT ME</h1>
				<img src = {require("./img/me.jpg")}  alt = "me" className = "mePic"/>
				<p className = "meText">
					As far back as I can remember I have always been interested in computers. When I was 5 years old my mom bought one of those generation 4 IMacs with the swivel monitor and I loved it to death. I would sit there for hours just tinkering with the files just seeing what would happen. By the time I was 12 I found three broken Dell laptops and made one working one out of all the parts. I’ll never forget the satisfaction I got from making something useful that also worked.
				</p>
				<p className = "meText">
					From there I moved onto more software based endeavors. Sophomore year of high school I taught myself HTML, CSS, and JavaScript and found my love for coding. I learned everything from YouTube and Google and honestly I was a terrible programmer back then but I still managed to make some really fun projects like a little browser based dungeon crawler. My love and competency for programming only increased as I got older. I learned Python and found out that I loved scraping webpages and parsing out data. I learned Ruby and discovered my love for automation. I learned Swift and realized the fun of mobile development.
				</p>
				<p className = "meText">
					Nearly every language and computer skill I know has been self-taught. I am always looking to learn and better myself as a person. Every past employer will agree that I have an unquenchable thirst for knowledge. Life’s too short to stop learning. I refuse to let my education stagnate. The way I see it I only have a few decades on this planet so I might as well spend them doing something fun and engaging. Learning is exactly that.
				</p>
			</div>
		)
	}
}

export default AboutMe