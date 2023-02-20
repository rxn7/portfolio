import './Project.css'
import {Params, useParams} from 'react-router-dom'
import projects from '../../data/projects.json'
import Frame from '../frame/Frame'
import ErrorText from '../errorText/ErrorText'

export declare type ProjectStatus = 'Finished' | 'Mantained' | 'Abandoned'

export declare type ProjectData = {
	name: string
	tags?: string[]
	displayName: string
	description: string
	detailedDescription?: string
	srcUrl?: string
	websiteUrl?: string
	downloadUrl?: string
	status: string
	screenshots: string[]
}

function ErrorScreen() {
	return <ErrorText text={'Failed to load the project page!'} />
}

export default function Project() {
	const urlParams: Params = useParams()
	const name: string = urlParams?.name as string

	if (!name) {
		console.error(`Name parameter is missing`)
		return <ErrorScreen />
	}

	const data: ProjectData = projects.filter(p => p.name === name)[0] || null

	if (!data) {
		console.error(`Project data (idx: ${name}) is undefined or null!`)
		return <ErrorScreen />
	}

	let screenshotElementIdx: number = 0
	const screenshotElements: JSX.Element[] = data.screenshots.map(ss => (
		<img key={screenshotElementIdx++} alt="" src={ss}></img>
	))

	const sourceCodeLinkElement: JSX.Element = data.srcUrl ? (
		<a
			className="project-website-url"
			target="_blank"
			rel="noreferrer"
			href={data.srcUrl}
		>
			Source code
		</a>
	) : (
		<></>
	)

	const websiteLinkElement: JSX.Element = data.websiteUrl ? (
		<a
			className="project-website-url"
			target="_blank"
			rel="noreferrer"
			href={data.websiteUrl}
		>
			Website
		</a>
	) : (
		<></>
	)

	const downloadLinkElement: JSX.Element = data.downloadUrl ? (
		<a
			className="project-website-url"
			target="_blank"
			rel="noreferrer"
			href={data.downloadUrl}
		>
			Download
		</a>
	) : (
		<></>
	)

	return (
		<>
			<h1 id="project-name">{data.displayName}</h1>
			<Frame title="Details">
				<p>{data.description}</p>
				<p>{data.detailedDescription}</p>
				<p>
					Status: <span style={{fontWeight: 'bold'}}>{data.status}</span>
				</p>

				<hr />

				{websiteLinkElement}
				{sourceCodeLinkElement}
				{downloadLinkElement}
			</Frame>

			{screenshotElements.length > 0 && (
				<Frame id="project-screenshots-frame" title="Screenshots">
					{screenshotElements}
				</Frame>
			)}
		</>
	)
}
