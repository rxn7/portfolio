import './Projects.css'
import {Link} from 'react-router-dom'
import Frame from '../frame/Frame'
import projects from '../../data/projects.json'

export default function Projects() {
	const projectsElements: JSX.Element[] = projects.map(project => (
		<div className="project-container" key={project.name}>
			<h3 className="project-name title">{project.displayName}</h3>
			<p className="project-description">{project.description}</p>
			<Link to={`/project/${project.name}`}>Learn more</Link>
		</div>
	))

	return (
		<Frame maxWidth="1000px" title="My Projects">
			<div id="projects-container">{projectsElements}</div>
		</Frame>
	)
}