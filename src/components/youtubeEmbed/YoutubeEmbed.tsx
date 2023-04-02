import "./YoutubeEmbed.css"

export interface IYoutubeEmbedProps {
	embedID: string
}

export default function YoutubeEmbed(props: IYoutubeEmbedProps) {
	return (
		<div className="yt-embed">
			<iframe title={props.embedID} src={`https://www.youtube.com/embed/${props.embedID}`} frameBorder="0" allow="acceloremeter; autoplay">
			</iframe>
		</div>
	)
}