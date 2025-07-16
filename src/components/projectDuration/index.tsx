import './style.css'
import {ProjectData} from 'data/ProjectData'

export interface ProjectDurationProps {
	project: ProjectData
}

export default function ProjectDuration(props: ProjectDurationProps) {
	if(!props.project.yearStart) return null
	
	return (
		<i className="project-duration">
			{props.project.yearStart} - {props.project.yearEnd || 'present'}
		</i>
	)
}
