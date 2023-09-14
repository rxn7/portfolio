import './Projects.css'
import { Link } from 'react-router-dom'
import Frame from '../frame/Frame'
import projectsData from '../../data/projects.json'
import { CategoryData } from '../../data/CategoryData'
import { ProjectIcon } from '../../data/ProjectData'

function getProjectsFromCategory(category: CategoryData): JSX.Element[] {
	return category.projects.map(project => {
		return <div className="project-container" key={project.name}>
			<h2 style={{marginBottom: '5px'}} className="project-name title">{project.displayName}</h2>
			<ProjectIcon project={project} size={64} />
			<p dangerouslySetInnerHTML={{__html: project.description || ""}}/>
			<Link to={`/project/${project.name}`}>Learn more</Link>
		</div>
	});
}

const categoriesElements: JSX.Element[] = projectsData.map(category => (
	<Frame maxWidth="1000" title={category.category} key={category.category} >
		<div className='projects-container'>
			{getProjectsFromCategory(category)}
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
