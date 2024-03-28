import { Route, Routes } from 'react-router-dom'
import Contact from 'routes/contact'
import Home from 'routes/home'
import Projects from 'routes/projects'
import Project from 'routes/project'
import Skills from 'routes/skills'
import Header from 'components/header'

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
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	)
}
