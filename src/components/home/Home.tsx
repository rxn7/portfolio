import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

			<div id="icon-container">
				<a href="https://github.com/rxn7" target="_blank" rel="noreferrer"> <FontAwesomeIcon beat={true} color="#fafafa" icon={faGithub} size='xl'/> </a>
				<a href="https://youtube.com/@rxn7" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faYoutube} color='red' size='xl'/> </a>
			</div>

			<hr/>

			<p>I'm a <b>{getAge()}</b> year old <b>software developer</b> based in <b>Poland</b>.<br/>I have been <i>obsessed</i> with <b>programming since 2020</b>.</p>

			<p>I specialize in: </p>
			<ul style={{listStyle: "none"}}>
				<li>Game (<i>Engine</i>) Development</li>
				<li>Full Stack Web Development</li>
				<li>Embedded Systems Programming</li>
			</ul>

			<hr />

			<p>
				Check out my <Link to="/projects">projects</Link> and my <Link to="/skills">skills</Link>!
			</p>

			<Link to="/contact">Contact me</Link>
		</Frame>
	)
}
