import React from 'react'
import './styles.scss'
import SvgPhone from '../Svgs/SvgPhone.js'
import SvgEmail from '../Svgs/SvgEmail.js'

const Contact = () => {
	return (
		<div id="contact">
			<h1>Contact Info</h1>
			<div className="container">
				<div className="contactInfo">
					<SvgPhone />
					<span className="phone"><a href="tel:5852037017">(585) 203-7017</a></span>
				</div>
				<div className="contactInfo">
					<SvgEmail />
					<span className="email"><a href="mailto:smitha9294@gmail.com">smitha9294@gmail.com</a></span>
				</div>
			</div>
		</div>
	)
}

export default Contact
