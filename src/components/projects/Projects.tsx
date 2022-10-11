import './Projects.css';
import projects from '../../data/projects.json';
import {Link} from 'react-router-dom';
import Frame from '../frame/Frame';

export default function Projects() {
	let idx: number = 0;
	const projectsElements: JSX.Element[] = projects.map(project => (
		<div className="project-container" key={idx++}>
			<h3 className="project-name title">{project.name}</h3>
			<p className="project-description">
				{project.description}
			</p>
			<Link to={`/projects/${idx}`}>Learn more</Link>
		</div>
	));

	return (
		<Frame title="My Projects">
			<div id="projects-container">{projectsElements}</div>
		</Frame>
	);
}
