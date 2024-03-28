import "./style.css"

export interface YoutubeEmbedProps {
	embedID: string
}

export default function YoutubeEmbed(props: YoutubeEmbedProps) {
	return (
		<div className="yt-embed">
			<iframe title={props.embedID} src={`https://www.youtube.com/embed/${props.embedID}`} frameBorder="0" allow="acceloremeter; autoplay">
			</iframe>
		</div>
	)
}
