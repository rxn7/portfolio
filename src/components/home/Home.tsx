import {Link} from 'react-router-dom'
import Frame from '../frame/Frame'
import './Home.css'

function getAge(): number {
	const dob: Date = new Date('2006-10-14')
	const now: Date = new Date()
	let age = now.getFullYear() - dob.getFullYear()

	if (now.getMonth() < dob.getMonth()) age--

	return age
}

export default function Home() {
	return (
		<Frame maxWidth="400" title="Hi, I'm Maciej Niziołek">
			<img id="selfie" src="img/selfie.jpg" alt="selfie"></img>
			<p>I'm a {getAge()} year old <b>software developer</b> based in <b>Poland</b>.</p>

			<hr/>

			<p>I'm mainly interested in: </p>

			<ul style={{listStyle: "none"}}>
				<li><b>Game Engine Development</b>,</li>
				<li><b>Game Development</b>,</li>
				<li><b>FullStack Web Development</b></li>
			</ul>

			<hr />

			<p>
				Check out my <Link to="/projects">projects</Link> and my{' '}
				<Link to="/skills">skills</Link>!
			</p>

			<Link to="/contact">Contact me</Link>
		</Frame>
	)
}
