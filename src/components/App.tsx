import {Route, Routes} from 'react-router-dom'
import Contact from './contact/Contact'
import Header from './header/Header'
import Home from './home/Home'
import Project from './project/Project'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

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
