import Frame from '../frame/Frame';
import './Header.css';

export default function Header() {
	const age: number = new Date().getFullYear() - 2006;

	return (
		<Frame>
			<h1 id="welcome-text" className="title">Hello, my name's Maciej Niziołek</h1>
			<p>I'm a {age} yo software/game/web developer based in Poland.</p>
		</Frame>
	);
}