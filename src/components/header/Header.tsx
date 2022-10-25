import Frame from '../frame/Frame';
import './Header.css';

export default function Header() {
	const age: number = new Date().getFullYear() - 2006;

	return (
		<Frame>
			<h1 id="welcome-text" className="title">
				Hello, my name's Maciej Niziołek
			</h1>
			<img id="selfie" src="img/selfie.jpg"></img>
			<p>
				I'm a {age} years old software developer based
				in Poland.
			</p>
		</Frame>
	);
}
