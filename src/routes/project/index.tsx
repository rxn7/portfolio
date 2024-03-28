import './style.css'

import {useEffect} from 'react'
import {Params, useParams} from 'react-router-dom'

import Frame from 'components/frame'
import ErrorText from 'components/errorText'
import YoutubeEmbed from 'components/youtubeEmbed'
import {ProjectData} from 'data/ProjectData'
import projectsData from 'data/projects.json'

export type ProjectStatus = 'Finished' | 'Mantained' | 'Abandoned'

export default function Project(): JSX.Element {
	const urlParams: Params = useParams()
	const name: string = urlParams?.name as string

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto',
		})
	}, [])

	if (!name) {
		console.error(`Name parameter is missing`)
		return <ErrorScreen />
	}

	const data: ProjectData | null =
		projectsData.projects.filter(p => p.name === name)[0] || null

	if (!data) {
		console.error(`Project data (idx: ${name}) is undefined or null!`)
		return <ErrorScreen />
	}

	return (
		<>
			<h1 id="project-name">{data.displayName}</h1>

			{data.banner && (
				<img
					style={{
						imageRendering: data.banner.pixelArt ? 'pixelated' : 'auto',
						maxWidth: '100%',
						maxHeight: '200px',
						width: 'auto',
					}}
					src={data.banner.src}
					alt="icon"
				/>
			)}

			<div className="project-frames-container" style={{marginTop: 50}}>
				<Frame title="Details">
					<p dangerouslySetInnerHTML={{__html: data.description || ''}} />
					<p
						dangerouslySetInnerHTML={{
							__html: data.detailedDescription || '',
						}}
					/>
					<p>
						Status: <span style={{fontWeight: 'bold'}}>{data.status}</span>
					</p>

					<br />

					{GetLinkElement(data.websiteUrl, 'Website')}
					{GetLinkElement(data.downloadUrl, 'Download')}
					{GetLinkElement(data.srcUrl, 'Source Code')}
				</Frame>

				{data.showWebsitePreview && data.websiteUrl && (
					<Frame id="project-preview-frame" title="Preview">
						{GetWebistePreviewElement(data)}
					</Frame>
				)}

				{data.screenshots && data.screenshots.length > 0 && (
					<Frame id="project-screenshots-frame" title="Screenshots">
						{GetScreenshotElements(data)}
					</Frame>
				)}

				{data.videosEmbedIDs && data.videosEmbedIDs.length > 0 && (
					<Frame id="project-videos-frame" title="Videos" maxWidth="100%">
						{GetVideoElements(data)}
					</Frame>
				)}
			</div>
		</>
	)
}

function ErrorScreen(): JSX.Element {
	return <ErrorText text={'Failed to load the project page!'} />
}

function GetScreenshotElements(data: ProjectData): JSX.Element[] {
	let screenshotElementIdx: number = 0
	return (
		data.screenshots?.map(ss => (
			<img key={screenshotElementIdx++} alt="" src={ss}></img>
		)) || []
	)
}

function GetVideoElements(data: ProjectData): JSX.Element[] {
	let videoElementIdx: number = 0
	return (
		data.videosEmbedIDs?.map(embedId => (
			<YoutubeEmbed key={videoElementIdx} embedID={embedId} />
		)) || []
	)
}

function GetLinkElement(url?: string, text?: string): JSX.Element {
	return url ? (
		<a className="project-website-url" target="_blank" rel="noreferrer" href={url}>
			{text}
		</a>
	) : (
		<></>
	)
}

function GetWebistePreviewElement(data: ProjectData): JSX.Element {
	return (
		<iframe
			width="960"
			height="960"
			title={data.websiteUrl}
			src={data.websiteUrl}
			className="project-website-preview"
		></iframe>
	)
}
