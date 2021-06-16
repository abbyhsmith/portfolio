import React from 'react'
import animalFactsPic from '../images/animalfacts.png'
import wowEnemyPic from '../images/wow.png'
import groceryListPic from '../images/grocerylist.png'

const Projects = () => {
	return (
		<div id="projects">
			<h1>My Projects</h1>
			<div className="projectContainer">
				<div className="projectDiv">
					<a href="/animalfacts">
						<img src={animalFactsPic} alt="Animal Facts App"/>
						<div className="projectTitle">Animal Facts</div>
					</a>
				</div>
				<div className="projectDiv">
					<a href="/wow-enemy-finder">
						<img src={wowEnemyPic} alt="World of Warcraft Enemy Search App"/>
						<div className="projectTitle">World of Warcraft Enemy Search</div>
					</a>
				</div>
				<div className="projectDiv">
					<a href="/grocery-list-maker">
						<img src={groceryListPic} alt="Grocery List Maker App" />
						<div className="projectTitle">Grocery List Maker</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects
