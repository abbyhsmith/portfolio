import React from 'react'
import './styles.scss'
import SvgCssIcon from '../Svgs/SvgCssIcon.js'
import SvgJsIcon from '../Svgs/SvgJsIcon.js'
import SvgHtmlIcon from '../Svgs/SvgHtmlIcon.js'
import SvgReactIcon from '../Svgs/SvgReactIcon.js'
import SvgJavaIcon from '../Svgs/SvgJavaIcon.js'
import SvgMySqlIcon from '../Svgs/SvgMySqlIcon.js'
import SvgGitIcon from '../Svgs/SvgGitIcon.js'
import SvgSassIcon from '../Svgs/SvgSassIcon.js'


const Skills = (props) => {
	return (
		<div id="skills">
			<h1>My Skills</h1>
			<div className="container">
				<div className="iconDivs">
					<div className="iconBg">
						<SvgCssIcon />
					</div>
					<br />
					CSS
				</div>
				<div className="iconDivs">
					<div className="iconBg">
						<SvgHtmlIcon />
					</div>
					<br />
					HTML5
				</div>
				<div className="iconDivs">
					<div className="iconBg">
						<SvgJsIcon />
					</div>
					<br />
					JavaScript
				</div>
				<div className="iconDivs">
					<div class="iconBg">
						<SvgReactIcon />
					</div>
					<br />
					React.js
				</div>
				<div className="iconDivs">
					<div className="iconBg">
						<SvgSassIcon />
					</div>
					<br />
					Sass
				</div>
				<div className="iconDivs">
					<div className="iconBg">
						<SvgMySqlIcon />
					</div>
					<br />
					MySQL
				</div>
				<div className="iconDivs">
					<div className="iconBg">
						<SvgJavaIcon />
					</div>
					<br />
					Java
				</div>
				<div className="iconDivs">
					<div className="iconBg">
						<SvgGitIcon />
					</div>
					<br />
					Git
				</div>
			</div>
		</div>
	)
}

export default Skills
