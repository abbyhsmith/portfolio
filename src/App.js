import NavBar from './components/NavBar.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import React, {useState, useEffect} from 'react'
import classNames from 'classnames'

function App() {
	const [scrolled, setScrolled] = useState(false)

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	const classes = classNames('App', {
		'scrolled': scrolled
	})

	const navClasses = classNames({
		'navScrolled': scrolled
	})

	return (
		<div className={classes}>
			<NavBar classnames={navClasses} />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}

export default App;
