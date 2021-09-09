import React from 'react'
import animalFactsPic from '../../images/animalfacts.png'
import airQualityPic from '../../images/airquality.png'
import groceryListPic from '../../images/grocerylist.png'
import './styles.scss'

const Projects = () => {
	return (
		<div id="projects">
			<div className="projectContainer">
				<div className="projectDiv">
					<a href="/animalfacts">
						<img src={animalFactsPic} alt="Animal Facts App"/>
						<div className="projectTitle">Animal Facts</div>
					</a>
				</div>
				<div className="projectDiv">
					<a href="/air-quality">
						<img src={airQualityPic} alt="Air Quality Report App"/>
						<div className="projectTitle">Air Quality Report</div>
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
