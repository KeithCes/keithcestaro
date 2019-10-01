import React from 'react'
import './main.css'

class Home extends React.Component {
	render() {
		return (
			<div className = "container">
				<img src = {require("./img/skyline.JPG")} alt = "skyline" className = "skyline"/>
				<h1 className = "name">Keith Cestaro</h1>
				<p className = "title">Computer Science and Finance, BS</p>
				<p className = "school">Northeastern University, 3rd Year</p>
			</div>
		)
	}
}

export default Home
