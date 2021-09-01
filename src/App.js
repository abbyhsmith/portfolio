import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import NavBar from './components/NavBar/NavBar.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

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
