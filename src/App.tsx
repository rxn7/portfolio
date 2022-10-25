import {Route, Routes} from 'react-router-dom';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Project from './components/project/Project';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function HomePage() {
	return (
		<>
			<Header />
			<Contact />
			<Experience />
			<Skills />
			<Projects />
		</>
	);
}

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/projects">
					<Route
						path=":id"
						element={<Project />}
					/>
				</Route>
			</Routes>
		</>
	);
}
