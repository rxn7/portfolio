import './style.css'

import {useNavigate} from 'react-router-dom'

import getCategoryIconString from 'categoryIcon'
import projectsData from 'data/projects.json'
import {ProjectData} from 'data/ProjectData'

export default function Projects() {
	const navigate = useNavigate()

	const projectsElements: JSX.Element[] = projectsData.projects.map(
		(project: ProjectData) => {
			const categoryIconsElements: JSX.Element[] =
				project.categories?.map(category => {
					console.log(getCategoryIconString(category))
					return (
						<i
							className={`${getCategoryIconString(category)} category-icon`}
						/>
					)
				}) || []

			return (
				<div
					className="project-container"
					key={project.name}
					onClick={() => navigate(`/project/${project.name}`)}
				>
					{project.banner && (
						<img
							style={{
								objectFit: 'contain',
								imageRendering: project.banner.pixelArt
									? 'pixelated'
									: 'auto',
								maxHeight: '50px',
							}}
							src={project.banner.src}
							alt="icon"
						/>
					)}

					<h2 style={{marginBottom: '5px'}} className="project-name title">
						{project.displayName}
					</h2>

					<p dangerouslySetInnerHTML={{__html: project.description || ''}} />

					<div className="category-icon-container">{categoryIconsElements}</div>
				</div>
			)
		}
	)

	return <div className="projects-container">{projectsElements}</div>
}
