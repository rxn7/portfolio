import './Frame.css';

export interface IFrameProps {
	title?: string,
	maxWidth?: string,
	children?: JSX.Element[] | JSX.Element,
}

export default function Frame(props: IFrameProps) {
	return	(
		<div className="frame" style={{maxWidth: props.maxWidth || "600px"}}>
			{props.title && <h2 className="title">{props.title}</h2>}
			{props.children}
		</div>
	);
}