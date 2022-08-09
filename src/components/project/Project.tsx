import './Project.css';
import { Link, useParams } from 'react-router-dom';
import projects from '../../data/projects.json';

export default function Project() {
	const params = useParams();
	let idx: number = parseInt(params.id as string);

	if(idx < 0 || idx >= projects.length)
		return <></>;

	const data = projects[idx];

	let i=0;
	const screenshotElements = data.screenshots.map(ss => <img key={i++} alt="" src={ss}></img>);

	return (
		<>
			<Link className="project-go-back-home" to="/">Go back home</Link>

			<h1>{data.name}</h1>
			<div id="project-frame" className="frame">
				<h3>Details</h3>
				<p>{data.description}</p>
				<p>Status: {data.status}</p>
				<a target="_blank" rel="noreferrer" href={data.srcUrl}>Source code</a>
			</div>

			<div id="project-screenshots-frame" className="frame">
				<h3>Screenshots</h3>
				{screenshotElements.length > 0 ? screenshotElements : <p>Empty!</p>}
			</div>
		</>
	);
}