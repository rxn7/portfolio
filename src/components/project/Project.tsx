import './Project.css';
import { Link, useParams } from 'react-router-dom';
import projects from '../../data/projects.json';

export declare type ProjectStatus = 'Finished' | 'Mantained' | 'Abandoned';

export declare type ProjectData = {
	name: string,
	description: string,
	detailedDescription: string,
	srcUrl: string,
	status: string,
	screenshots: string[],
}

function GoBackHomeLink() {
	return <Link className="project-go-back-home" to="/">Go back home</Link>
}

function ErrorScreen() {
	return (
		<>
			<GoBackHomeLink/>
			<h3>Failed to load the project page!</h3>
		</>
	);
}

export default function Project() {
	const params = useParams();
	let idx: number = parseInt(params.id as string);
	
	if(idx < 0 || idx >= projects.length) {
		console.error(`Failed to find project of idx: ${idx}`);
		return <ErrorScreen />;
	}

	const data: ProjectData = projects[idx];
	if(!data) {
		console.error(`Project data (idx: ${idx}) is undefined or null!`);
		return <ErrorScreen />;
	}

	let i: number = 0;
	const screenshotElements: JSX.Element[] = data.screenshots.map(ss => <img key={i++} alt="" src={ss}></img>);

	return (
		<>
			<GoBackHomeLink />

			<h1 className="title">{data.name}</h1>
			<div id="project-frame" className="frame">
				<h2 className='title'>Details</h2>
				<p>{data.description}</p>
				<p>{data.detailedDescription}</p>
				<p>Status: <span style={{fontWeight: 'bold'}}>{data.status}</span></p>
				<a target="_blank" rel="noreferrer" href={data.srcUrl}>Source code</a>
			</div>

			<div id="project-screenshots-frame" className="frame">
				<h2 className='title'>Screenshots</h2>
				{screenshotElements.length > 0 ? screenshotElements : <p>Empty!</p>}
			</div>
		</>
	);
}