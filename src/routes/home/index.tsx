import './style.css'

import { faGithub, faLinkedin, faLinkedinIn, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons'

import Frame from 'components/frame'
import ProfileIcon from 'components/profileIcon'

export default function Home() {
	return (
		<Frame maxWidth="400" title="Hi, I'm Maciej Niziołek">
			<img id="selfie" src="img/selfie.jpg" alt="selfie"></img>

			<div id="icon-container">
				<ProfileIcon url="https://github.com/rxn7" color="#fafafa" icon={faGithub} />
				<ProfileIcon url="https://youtube.com/@rxn7" color="red" icon={faYoutube} />
				<ProfileIcon url="https://www.linkedin.com/in/maciej-niziołek-025982344" color="#0a66c2" icon={faLinkedin} />
			</div>

			<hr />

			<p>I'm an <b>{getAge()}</b> year old <b>software developer</b> based in <b>Poland</b>.<br />I have been <b>programming since 2020</b>.</p>

			<div>
				<p style={{ marginBottom: 4 }}>I specialize in: </p>
				<p style={{ margin: 1 }}><b>Game</b> (<i>Engine</i>) development</p>
				<p style={{ margin: 1 }}><b>Backend Web</b> development</p>
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
