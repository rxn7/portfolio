import {Link} from 'react-router-dom'
import NavBar from '../navbar/Navbar'
import './Header.css'

export default function Header() {
	return (
		<header
			style={{
				width: '100%',
				backgroundColor: 'var(--primary-background-color)',
				borderBottom: '2px solid var(--secondary-background-color)',
				display: 'flex',
				position: 'sticky',
				top: 0,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-around',
				zIndex: 1000,
				paddingTop: 20,
				paddingBottom: 20,
				marginBottom: 20,
			}}
		>
			<Link to="/">
				<p
					style={{
						color: 'var(--primary-color)',
						margin: 0,
						fontSize: '2em',
						userSelect: 'none',
						cursor: 'pointer',
					}}
				>
					Maciej Niziołek
				</p>
			</Link>
			<NavBar />
		</header>
	)
}
