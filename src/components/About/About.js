import React from 'react'
import './styles.scss'
import pic from '../../images/me_and_cat.jpg'

const About = (props) => {
	return (
		<div id="about">
			<div className="container">
				<section className="bio">
					<h1>Welcome to my site!</h1>
					<p>
						My name is <span>Abigail Smith</span>, but I go by <span>Abby</span>. I was born in Rochester, New York and moved to Austin, Texas around three years ago, where I live with my partner and my cat named Cat. I have a <span>Bachelor of Science in Geology</span> from <span>SUNY Potsdam</span>, as well as an <span>Associate of Applied Science in Computer Information Technology with a Web Programming specialization</span> from <span>Austin Community College</span>. In my free time, I enjoy playing video games, watching anime, and playing with my cat.
					</p>
				</section>
				<img src={pic} alt="Me and my cat!" />
			</div>
		</div>
	)
}

export default About
