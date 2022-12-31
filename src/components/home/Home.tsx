import Frame from '../frame/Frame'
import './Home.css'

export default function Home() {
	return (
		<>
			<Frame>
				<h1 id="welcome-text" className="title">
					Hello, my name's Maciej Niziołek
				</h1>
				<img id="selfie" src="img/selfie.jpg" alt="selfie"></img>
				<p>I'm a 16 year old software developer based in Poland.</p>
			</Frame>
		</>
	)
}
