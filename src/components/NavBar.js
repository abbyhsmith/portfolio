import React from 'react'
import SvgGithubIcon from './Svgs/SvgGithubIcon'

const NavBar = ({classnames}) => {
	return (
		<nav className={classnames}>
			<a className="nameLink" href="home">Abigail Smith</a>
			<ul>
				<li><a href="#about">About</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
				<li><a target="_blank" className="github" href="https://github.com/abbyhsmith"><SvgGithubIcon /></a></li>
			</ul>
		</nav>
	)
}

export default NavBar
