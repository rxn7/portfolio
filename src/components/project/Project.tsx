import './Project.css'
import {Params, useParams} from 'react-router-dom'
import projects from '../../data/projects.json'
import Frame from '../frame/Frame'

export declare type ProjectStatus = 'Finished' | 'Mantained' | 'Abandoned'

export declare type ProjectData = {
	name: string
	displayName: string
	description: string
	detailedDescription: string
	srcUrl?: string
	websiteUrl?: string
	status: string
	screenshots: string[]
}

function ErrorScreen() {
	return (
		<>
			<h3>Failed to load the project page!</h3>
		</>
	)
}

export default function Project() {
	const params: Params = useParams()
	let name: string = params.name as string

	if (!name) {
		console.error(`Name parameter is missing`)
		return <ErrorScreen />
	}

	const data: ProjectData = projects.filter(p => p.name === name)[0] || null

	if (!data) {
		console.error(`Project data (idx: ${name}) is undefined or null!`)
		return <ErrorScreen />
	}

	let i: number = 0
	const screenshotElements: JSX.Element[] = data.screenshots.map(ss => (
		<img key={i++} alt="" src={ss}></img>
	))

	return (
		<>
			<h1 id="project-name">{data.displayName}</h1>
			<Frame title="Details">
				<p>{data.description}</p>
				<p>{data.detailedDescription}</p>
				<p>
					Status: <span style={{fontWeight: 'bold'}}>{data.status}</span>
				</p>

				{data.srcUrl ? (
					<a target="_blank" rel="noreferrer" href={data.srcUrl}>
						Source code
					</a>
				) : (
					<></>
				)}

				<br></br>

				{data.websiteUrl ? (
					<a target="_blank" rel="noreferrer" href={data.websiteUrl}>
						Website
					</a>
				) : (
					<></>
				)}
			</Frame>

			{screenshotElements.length > 0 && (
				<Frame id="project-screenshots-frame" title="Screenshots">
					{screenshotElements}
				</Frame>
			)}
		</>
	)
}
