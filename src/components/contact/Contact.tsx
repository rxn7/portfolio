import Frame from '../frame/Frame';
import './Contact.css';

export default function Contact() {
	return (
		<Frame title="Contact" maxWidth="300px">
			<p>
				<img
					alt=""
					draggable="false"
					className="icon"
					src="img/icons/discord.svg"
				/>
				rxn#4972
			</p>
			<p>
				<img
					alt=""
					draggable="false"
					className="icon"
					src="img/icons/envelope.svg"
				/>
				rotthin_dev@pm.me
			</p>
			<p>
				<a
					href="https://github.com/rxn7"
					target="_blank"
					rel="noreferrer"
				>
					<img
						alt=""
						draggable="false"
						className="icon"
						src="img/icons/github.svg"
					/>
					@rxtthin
				</a>
			</p>
			<p>
				<a
					href="https://twitter.com/rxtthin"
					target="_blank"
					rel="noreferrer"
				>
					<img
						alt=""
						draggable="false"
						className="icon"
						src="img/icons/twitter.svg"
					/>
					@rxtthin
				</a>
			</p>
		</Frame>
	);
}
