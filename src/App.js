import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import ScrollableAnchor from 'react-scrollable-anchor'

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar/>
				<ScrollableAnchor id = "home">
					<Home/>
				</ScrollableAnchor>
				<ScrollableAnchor id = "skills">
					<Skills/>
				</ScrollableAnchor>
				<ScrollableAnchor id = "experience">
					<Experience/>
				</ScrollableAnchor>
				<ScrollableAnchor id = "education">
					<Education/>
				</ScrollableAnchor>
				<ScrollableAnchor id = "about-me">
					<AboutMe/>
				</ScrollableAnchor>
				<ScrollableAnchor id = "contact">
					<Contact/>
				</ScrollableAnchor>
			</div>

		)
	}
}

export default App
