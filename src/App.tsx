import {Route, Routes} from 'react-router-dom'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Project from './components/project/Project'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

export default function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/project">
					<Route path=":name" element={<Project />} />
				</Route>

				<Route path="/projects" element={<Projects />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	)
}
