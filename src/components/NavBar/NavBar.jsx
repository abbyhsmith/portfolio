import React from 'react'
import SvgGithubIcon from '../Svgs/SvgGithubIcon'
import './styles.scss'

const NavBar = ({classnames}) => {
	return (
		<nav className={classnames}>
			<span className="nameLink">Abigail Smith</span>
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#skillsTitle">Skills</a></li>
				<li><a href="#projectsTitle">Projects</a></li>
				<li><a href="#contactTitle">Contact</a></li>
				<li><a target="_blank" rel="noreferrer" className="github" href="https://github.com/abbyhsmith"><SvgGithubIcon /></a></li>
			</ul>
		</nav>
	)
}

export default NavBar
