import './Projects.css';
import projects from './data/projects.json';

export default function Projects() {
	let idx=0;
	const projectsElements: JSX.Element[] = projects.map(project =>
		<div className="project-container" key={idx++}>
			<h3 className="project-name">{project.name}</h3>
			<p className="project-description">{project.description}</p>
			<p className="project-status">Status: {project.status}</p>
			<a href={project.srcUrl} target="_blank" rel="noopener" className="project-src">Source code</a>
		</div>
	);

	return (
		<div className="frame">
			<h3>My projects</h3>

			<div id="projects-container">
				{projectsElements}
			</div>
		</div>
	);
}