import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

interface IHeaderNavLinkProps {
	onClick: () => void
	path: string
	text: string
}

function HeaderNavLink(props: IHeaderNavLinkProps) {
	const currentPath: string = useLocation().pathname
	const isNavItemCurrent: boolean = currentPath === props.path
	const className: string = 'nav-item' + (isNavItemCurrent ? ' nav-item-current' : '')

	return (
		<Link onClick={props.onClick} className={className} to={props.path}>
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

	return (
		<nav className="nav">
			<div className={`nav-items ${navItemsClass}`}>
				<HeaderNavLink onClick={hideNav} path="/" text="Home" />
				<HeaderNavLink onClick={hideNav} path="/projects" text="Projects" />
				<HeaderNavLink onClick={hideNav} path="/skills" text="Skills" />
				<HeaderNavLink onClick={hideNav} path="/contact" text="Contact" />
			</div>

			<div onClick={toggleNav} className={`nav-toggler ${navTogglerClass}`}>
				<div className="nav-toggler-line1"></div>
				<div className="nav-toggler-line2"></div>
				<div className="nav-toggler-line3"></div>
			</div>
		</nav>
	)
}
