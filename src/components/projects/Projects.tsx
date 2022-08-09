import './Projects.css';
import projects from '../../data/projects.json';
import { Link } from 'react-router-dom';

export default function Projects() {
	let idx=0;
	const projectsElements: JSX.Element[] = projects.map(project =>
		<div className="project-container" key={idx++}>
			<h3 className="project-name">{project.name}</h3>
			<p className="project-description">{project.description}</p>
			<Link to={`/projects/${idx}`}>Learn more</Link>
		</div>
	);

	return (
		<div id="projects-frame" className="frame">
			<h3>My projects</h3>

			<div id="projects-container">
				{projectsElements}
			</div>
		</div>
	);
}