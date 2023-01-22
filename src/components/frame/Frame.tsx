import './Frame.css'

const defaultMaxWidth: string = '600px';

export interface IFrameProps {
	id?: string
	title?: string
	maxWidth?: string
	children?: JSX.Element[] | JSX.Element
}

export default function Frame(props: IFrameProps) {
	return (
		<div
			id={props.id}
			className="frame"
			style={{maxWidth: props.maxWidth || defaultMaxWidth}}
		>
			{props.title && <h2 className="title">{props.title}</h2>}
			{props.children}
		</div>
	)
}
