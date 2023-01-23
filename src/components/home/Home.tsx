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
		<Frame title="Hello, my name's Maciej Niziołek">
			<img id="selfie" src="img/selfie.jpg" alt="selfie"></img>
			<p>I'm a {getAge()} year old software developer based in Poland.</p>

			<hr />

			<p>
				Check out my <Link to="/projects">projects</Link>!
			</p>
		</Frame>
	)
}
