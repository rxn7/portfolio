import './style.css'

import {useEffect} from 'react'
import Frame from 'components/frame'

export default function Skills() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'auto',
		})
	}, [])

	return (
		<div className="skills-container">
			<Frame id="frontend-skills-frame" title="Frontend" maxWidth="1000px">
				<ul>
					<li>NextJS</li>
					<li>ReactJS</li>
					<li>HTML + CSS + JS/TS</li>
					<li>Canvas2D</li>
					<li>WebGL</li>
					<li>WebSockets</li>
				</ul>
			</Frame>

			<Frame id="backend-skills-frame" title="Backend" maxWidth="1000px">
				<ul>
					<li>ExpressJS REST API (Typescript)</li>
					<li>NextJS REST API (Typescript)</li>
					<li>NestJS REST API (Typescript)</li>
					<li>Ktor REST API (Kotlin)</li>
					<li>BaoJS WebSockets</li>
					<li>Prisma ORM</li>
					<li>NextAuth authorization</li>
					<li>PassportJS authorization</li>
					<li>JWT</li>
				</ul>
			</Frame>

			<Frame
				id="software-development-skills-frame"
				title="Software Development"
				maxWidth="1000px"
			>
				<ul>
					<li>WinForms desktop apppcations (C#)</li>
					<li>WPF desktop apppcations (C#)</li>
					<li>GTK desktop apppcations (C, C++)</li>
					<li>QT desktop apppcations (C++)</li>
					<li>ImGUI desktop applications (C++)</li>
					<li>Android mobile applications (Kotlin)</li>
					<li>Kotlin Multiplatform Jetpack Compose</li>
					<li>WinAPI programming (C++)</li>
					<li>X11 programming (C)</li>
					<li>Writing CMake files</li>
					<li>Writing Unix Makefiles</li>
					<li>Client/Server networking using TCP and UDP</li>
					<li>Writing Unit Tests (Google Test, Jest)</li>
					<li>Writing Integration Tests (Google Test)</li>
				</ul>
			</Frame>

			<Frame id="gamedev-skills-frame" title="Game Dev" maxWidth="1000px">
				<ul>
					<li>Unity Scripting (C#)</li>
					<li>Unity VR Scripting (C#)</li>
					<li>Unity Custom Editor Scripting (C#)</li>
					<li>Godot 2D/3D Scripting (C#, GDScript)</li>
					<li>UnrealEngine4 C++ Scripting</li>
					<li>OpenGL programming (C, C++)</li>
					<li>Using ECS with entt (C++)</li>
					<li>Creating games with SFML (C++)</li>
					<li>Creating games with SDL2 (C, C++)</li>
					<li>Creating games with Allegro (C++)</li>
					<li>Minecraft Spigot plugins (Java)</li>
					<li>Creating games with LWJGL (Java)</li>
					<li>Writing shaders in GLSL</li>
				</ul>
			</Frame>

			<Frame id="gui-skills-frame" title="GUI Apps" maxWidth="1000px">
				<ul>
				</ul>
			</Frame>

			<Frame id="tools-skills-frame" title="Tools" maxWidth="1000px">
				<ul>
					<li>Vim/Neovim</li>
					<li>Visual Studio Code</li>
					<li>Visual Studio 2019/2022</li>
					<li>Jetbrains Rider</li>
					<li>Jetbrains Intellij Idea</li>
					<li>Android Studio</li>
					<li>Linux</li>
					<li>Windows</li>
				</ul>
			</Frame>

			<Frame id="other-skills-frame" title="Other" maxWidth="1000px">
				<ul>
					<li>Shell/Bash scripting</li>
				</ul>
			</Frame>
		</div>
	)
}
