import Frame from '../frame/Frame'
import './Experience.css'

export default function Experience() {
	return (
		<Frame title="My Experience">
			<ul id="experience-list">
				<li>
					Employed at
					<a
						href="https://cetuspro.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						{' '}
						CetusPro{' '}
					</a>
					as a backend developer (09/2022 - present).
				</li>
				<li>
					Internship at
					<a
						href="https://cetuspro.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						{' '}
						CetusPro{' '}
					</a>
					as a backend developer (22/06/2022 - 22/07/2022).
				</li>
				<li>Experience gained by developing my own projects (since 2019).</li>
			</ul>
		</Frame>
	)
}
