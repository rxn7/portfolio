import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import Frame from '../frame/Frame'
import './Contact.css'
import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type ContactIconProps = {
	icon: IconDefinition
	text: string
	href?: string
}

function ContactElement(props: ContactIconProps) {
	return (
		<p className="contact-element">
			<FontAwesomeIcon icon={props.icon} style={{marginRight: 5}} />

			{props.href ? (
				<a target="_blank" rel="noreferrer" href={props.href}>
					{props.text}
				</a>
			) : (
				<span>{props.text}</span>
			)}
		</p>
	)
}

export default function Contact() {
	return (
		<Frame title="Contact" maxWidth="250px">
			<ContactElement icon={faDiscord} text="@rxn77" />
			<ContactElement icon={faEnvelope} text="rotthin_dev@pm.me" />
			<ContactElement icon={faGithub} text="@rxn7" href="https://github.com/rxn7" />
		</Frame>
	)
}
