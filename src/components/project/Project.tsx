import './Project.css'
import { Params, useParams } from 'react-router-dom'
import projectsData from '../../data/projects.json'
import Frame from '../frame/Frame'
import ErrorText from '../errorText/ErrorText'
import YoutubeEmbed from '../youtubeEmbed/YoutubeEmbed'
import { ProjectData } from '../../data/ProjectData'

export declare type ProjectStatus = 'Finished' | 'Mantained' | 'Abandoned'

const allProjects: ProjectData[] = projectsData.flatMap(c => [...c.projects])

export default function Project(): JSX.Element {
	const urlParams: Params = useParams()
	const name: string = urlParams?.name as string

	if (!name) {
		console.error(`Name parameter is missing`)
		return <ErrorScreen />
	}

	let data: ProjectData | null = allProjects.filter(p => p.name === name)[0] || null

	if (!data) {
		console.error(`Project data (idx: ${name}) is undefined or null!`)
		return <ErrorScreen />
	}

	return (
		<>
			<h1 id="project-name">{data.displayName}</h1>
			<Frame title="Details">
				<p>{data.description}</p>
				<p>{data.detailedDescription}</p>
				<p>
					Status: <span style={{ fontWeight: 'bold' }}>{data.status}</span>
				</p>

				<hr />

				{GetLinkElement(data.websiteUrl, "Website")}
				{GetLinkElement(data.downloadUrl, "Download")}
				{GetLinkElement(data.srcUrl, "Source Code")}

			</Frame>

			{data.showWebsitePreview && data.websiteUrl && (
				< Frame id="project-preview-frame" title="Preview">
					{GetWebistePreviewElement(data)}
				</Frame>
			)}

			{data.screenshots && data.screenshots.length > 0 && (
				<Frame id="project-screenshots-frame" title="Screenshots">
					{GetScreenshotElements(data)}
				</Frame>
			)}

			{data.videosEmbedIDs && data.videosEmbedIDs.length > 0 && (
				<Frame id="project-videos-frame" title="Videos">
					{GetVideoElements(data)}
				</Frame>
			)}
		</>
	)
}

function ErrorScreen(): JSX.Element {
	return <ErrorText text={'Failed to load the project page!'} />
}

function GetScreenshotElements(data: ProjectData): JSX.Element[] {
	let screenshotElementIdx: number = 0
	return data.screenshots?.map(ss => (
		<img key={screenshotElementIdx++} alt="" src={ss}></img>
	)) || []
}

function GetVideoElements(data: ProjectData): JSX.Element[] {
	let videoElementIdx: number = 0
	return data.videosEmbedIDs?.map(embedId => (
		<YoutubeEmbed key={videoElementIdx} embedID={embedId}></YoutubeEmbed>
	)) || []
}

function GetLinkElement(url?: string, text?: string): JSX.Element {
	return url ? (
		<a
			className="project-website-url"
			target="_blank"
			rel="noreferrer"
			href={url}
		>
			{text}
		</a>
	) : (
		<></>
	)
}

function GetWebistePreviewElement(data: ProjectData): JSX.Element {
	return (
		<iframe width="960" height="960" title={data.websiteUrl} src={data.websiteUrl} className="project-website-preview">
		</iframe>
	);
}
