import './style.css'

const defaultMaxWidth: string = '900px'

export type FrameProps = {
	id?: string
	title?: string
	maxWidth?: string
	children?: JSX.Element[] | JSX.Element
}

export default function Frame(props: FrameProps) {
	return (
		<div
			id={props.id}
			className="frame"
			style={{maxWidth: props.maxWidth || defaultMaxWidth}}
		>
			{props.title && <p className="title">{props.title}</p>}
			{props.children}
		</div>
	)
}
