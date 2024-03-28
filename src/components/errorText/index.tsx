import './style.css'

export interface IErrorTextProps {
	text: string
}

export default function ErrorText(props: IErrorTextProps) {
	return <p className="error-text">{props.text}</p>
}
