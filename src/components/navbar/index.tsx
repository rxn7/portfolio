import './style.css'

import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {faBook, faCode, faHome, faPhone} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/free-brands-svg-icons'

type HeaderNavLinkProps = {
	onClick: () => void
	path: string
	text: string
	icon: IconDefinition
}

function HeaderNavLink(props: HeaderNavLinkProps) {
	const currentPath: string = useLocation().pathname
	const isNavItemCurrent: boolean = currentPath === props.path
	const className: string = 'nav-item' + (isNavItemCurrent ? ' nav-item-current' : '')

	return (
		<Link onClick={props.onClick} className={className} to={props.path}>
			<FontAwesomeIcon icon={props.icon} />
			<span style={{marginLeft: 4}}>{props.text}</span>
		</Link>
	)
}

export default function NavBar() {
	const [isActive, setIsActive] = useState(false)
	const hideNav = () => setIsActive(false)
	const showNav = () => setIsActive(true)
	const toggleNav = () => (isActive ? hideNav() : showNav())

	const navItemsClass = isActive ? 'nav-items-active' : 'nav-items-hidden'
	const navTogglerClass = isActive ? 'nav-toggler-x' : 'nav-toggler-bar'
	const navTogglerOverlayClass = isActive
		? 'nav-toggler-screen-overlay-active'
		: 'nav-toggler-screen-overlay'

	return (
		<nav className="nav">
			<div className={`nav-items ${navItemsClass}`}>
				<HeaderNavLink onClick={hideNav} path="/" text="Home" icon={faHome} />
				<HeaderNavLink
					onClick={hideNav}
					path="/projects"
					text="Projects"
					icon={faCode}
				/>
				<HeaderNavLink
					onClick={hideNav}
					path="/skills"
					text="Skills"
					icon={faBook}
				/>
				<HeaderNavLink
					onClick={hideNav}
					path="/contact"
					text="Contact"
					icon={faPhone}
				/>
			</div>

			<div className={navTogglerOverlayClass} onClick={hideNav} />

			<div onClick={toggleNav} className={`nav-toggler ${navTogglerClass}`}>
				<div className="nav-toggler-line1" />
				<div className="nav-toggler-line2" />
				<div className="nav-toggler-line3" />
			</div>

			<div
				className={`nav-bar-overlay ${isActive ? 'nav-bar-overlay-active' : ''}`}
			/>
		</nav>
	)
}
