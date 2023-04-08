import './Projects.css'
import { Link } from 'react-router-dom'
import Frame from '../frame/Frame'
import projectsData from '../../data/projects.json'
import { CategoryData } from '../../data/CategoryData'

function getProjectsElements(category: CategoryData): JSX.Element[] {
	return category.projects.map(project => (
		<div className="project-container" key={project.name}>
			<h3 className="project-name title">{project.displayName}</h3>
			<p className="project-description">{project.description}</p>
			<Link to={`/project/${project.name}`}>Learn more</Link>
		</div>
	))
}

const categoriesElements: JSX.Element[] = projectsData.map(category => (
	<Frame maxWidth="1000" title={category.category} >
		<div className='projects-container'>
			{getProjectsElements(category)}
		</div>
	</Frame >
))

export default function Projects() {
	return (
		<div className="categories-container">
			{categoriesElements}
		</div>
	)
}
