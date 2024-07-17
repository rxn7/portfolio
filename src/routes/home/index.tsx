import './style.css'

import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Frame from 'components/frame'

export default function Home() {
	return (
		<Frame maxWidth="400" title="Hi, I'm Maciej Niziołek">
			<img id="selfie" src="img/selfie.jpg" alt="selfie"></img>

			<div id="icon-container">
				<a href="https://github.com/rxn7" target="_blank" rel="noreferrer"> <FontAwesomeIcon beat={true} color="#fafafa" icon={faGithub} size='xl' /> </a>
				<a href="https://youtube.com/@rxn7" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faYoutube} color='red' size='xl' /> </a>
			</div>

			<hr />

			<p>I'm a <b>{getAge()}</b> year old <b>software developer</b> based in <b>Poland</b>.<br />I have been <i>obsessed</i> with <b>programming since 2020</b>.</p>

			<div>
				<p style={{ marginBottom: 4 }}>I specialize in: </p>
				<p style={{ margin: 1 }}><b>Game</b> (<i>Engine</i>) <b>Development</b></p>
				<p style={{ margin: 1 }}><b>Full Stack Web</b> Development</p>
			</div>

			<div>
				<p style={{ marginBottom: 4 }}>I'm also interested in: </p>
				<p style={{ margin: 1 }}><b>Desktop app</b> development</p>
				<p style={{ margin: 1 }}><b>Mobile app</b> development</p>
				<p style={{ margin: 1 }}><b>Embedded</b> development</p>
			</div>
		</Frame>
	)
}

function getAge(): number {
	const dob: Date = new Date('2006-10-14')
	const now: Date = new Date()
	let age = now.getFullYear() - dob.getFullYear()

	if (now.getMonth() < dob.getMonth()) --age

	return age
}
