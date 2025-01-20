import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface ProfileIconProps {
	url: string
	color?: string
	icon: IconDefinition
	beat?: boolean
}

export default function ProfileIcon(props: ProfileIconProps) {
	return (
		<a href={props.url} target="_blank" rel="noreferrer"> <FontAwesomeIcon beat={props.beat} color={props.color || 'white'} icon={props.icon} size='xl' /> </a>
	)
}
