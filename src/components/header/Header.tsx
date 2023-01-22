import {Link, useLocation} from 'react-router-dom'
import './Header.css'

interface IHeaderNavLinkProps {
	path: string
	text: string
}

function HeaderNavLink(props: IHeaderNavLinkProps) {
	const currentPath: string = useLocation().pathname
	const isNavItemCurrent: boolean = currentPath === props.path
	const className: string = 'nav-item' + (isNavItemCurrent ? ' nav-item-current' : '')

	return (
		<Link className={className} to={props.path}>
			{props.text}
		</Link>
	)
}

export default function Header() {
	return (
		<header>
			<nav>
				<HeaderNavLink path="/" text="Home" />
				<HeaderNavLink path="/projects" text="Projects" />
				<HeaderNavLink path="/skills" text="Skills" />
				<HeaderNavLink path="/experience" text="Experience" />
				<HeaderNavLink path="/contact" text="Contact" />
			</nav>
		</header>
	)
}
