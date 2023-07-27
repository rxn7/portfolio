import Frame from '../frame/Frame'
import './Contact.css'

type ContactIconProps = {
	iconSrc: string
	text: string
	href?: string
}

function ContactIcon(props: ContactIconProps) {
	const imgElement: JSX.Element = (
		<img alt="" draggable="false" className="icon" src={props.iconSrc} />
	)

	if (props.href) {
		return (
			<p className="contact-element">
				{imgElement}
				<a target="_blank" rel="noreferrer" href={props.href}>
					{props.text}
				</a>
			</p>
		)
	}

	return (
		<p className="contact-element">
			{imgElement}
			{props.text}
		</p>
	)
}

export default function Contact() {
	return (
		<Frame title="Contact" maxWidth="250px">
			<ContactIcon iconSrc="img/icons/discord.svg" text="rxn#4972" />
			<ContactIcon iconSrc="img/icons/envelope.svg" text="rotthin_dev@pm.me" />
			<ContactIcon
				iconSrc="img/icons/github.svg"
				text="@rxn7"
				href="https://github.com/rxn7"
			/>
			<ContactIcon
				iconSrc="img/icons/twitter.svg"
				text="@rxtthin"
				href="https://twitter.com/rxtthin"
			/>
		</Frame>
	)
}
