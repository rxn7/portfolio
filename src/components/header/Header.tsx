import './Header.css';

export default function Header() {
	return (
		<div id="header" className='frame'>
			<h1 id="header-welcome-text">Hello, my name's Maciej Niziołek.</h1>
			<p>I'm a {new Date().getFullYear()-2006} yo software/game/web developer based in Poland.</p>
		</div>
	);
}