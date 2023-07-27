import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

type HeaderNavLinkProps = {
	onClick: () => void
	path: string
	text: string
	iconSrc: string
}

function HeaderNavLink(props: HeaderNavLinkProps) {
	const currentPath: string = useLocation().pathname
	const isNavItemCurrent: boolean = currentPath === props.path
	const className: string = 'nav-item' + (isNavItemCurrent ? ' nav-item-current' : '')

	return (
		<Link onClick={props.onClick} className={className} to={props.path}>
			<img alt="" draggable="false" className="icon" src={props.iconSrc} />
			{props.text}
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
	const navTogglerOverlayClass = isActive ? 'nav-toggler-screen-overlay-active' : 'nav-toggler-screen-overlay';

	return (
		<nav className="nav">
			<div className={`nav-items ${navItemsClass}`}>
				<HeaderNavLink onClick={hideNav} path="/" text="Home" iconSrc="img/icons/home.svg" />
				<HeaderNavLink onClick={hideNav} path="/projects" text="Projects" iconSrc="img/icons/projects.svg" />
				<HeaderNavLink onClick={hideNav} path="/skills" text="Skills" iconSrc="img/icons/skills.svg" />
				<HeaderNavLink onClick={hideNav} path="/contact" text="Contact" iconSrc="img/icons/contact.svg" />
			</div>

			<div className={navTogglerOverlayClass} onClick={hideNav}/>

			<div onClick={toggleNav} className={`nav-toggler ${navTogglerClass}`}>
				<div className="nav-toggler-line1"></div>
				<div className="nav-toggler-line2"></div>
				<div className="nav-toggler-line3"></div>
			</div>
		</nav>
	)
}
