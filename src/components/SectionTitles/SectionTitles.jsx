import React from 'react'
import './styles.scss'

const SectionTitles = ({title, titleId}) => {
	return (
		<div className="sectionTitle" id={titleId}>
			<h1>{title}</h1>
		</div>
	)
}

export default SectionTitles
