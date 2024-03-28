import './style.css'

export interface ErrorTextProps {
	text: string
}

export default function ErrorText(props: ErrorTextProps) {
	return <p className="error-text">{props.text}</p>
}
