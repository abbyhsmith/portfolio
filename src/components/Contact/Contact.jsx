import React from 'react'
import SvgPhone from '../Svgs/SvgPhone.js'
import SvgEmail from '../Svgs/SvgEmail.js'
import './styles.scss'

const Contact = () => {
	return (
		<div id="contact">
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
