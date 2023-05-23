import Frame from '../frame/Frame'
import './Skills.css'

export default function Skills() {
	return (
		<div id="skills-container">
			<Frame id="frontend-skills-frame" title="Frontend" maxWidth="1000px">
				<ul>
					<li>ReactJS frontend (TypeScript)</li>
					<li>HTML + CSS + JS/TS frontend</li>
				</ul>
			</Frame>

			<Frame id="backend-skills-frame" title="Backend" maxWidth="1000px">
				<ul>
					<li>ExpressJS REST API backend</li>
					<li>NestJS REST API</li>
					<li>NestJS Prisma integration</li>
					<li>PassportJS authorization</li>
					<li>JWT</li>
				</ul>
			</Frame>

			<Frame id="gui-skills-frame" title="GUI Apps" maxWidth="1000px">
				<ul>
					<li>WinForms desktop apppcations (C#)</li>
					<li>WPF desktop apppcations (C#)</li>
					<li>GTK desktop apppcations (C, C++)</li>
					<li>QT desktop apppcations (C++)</li>
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
					<li>WinAPI programming (C++)</li>
					<li>Using ECS with entt (C++)</li>
					<li>Creating games with SFML (C++)</li>
					<li>Creating games with SDL2 (C, C++)</li>
					<li>Creating games with Allegro (C++)</li>
					<li>Writing CMake files</li>
					<li>Writing Unix Make files</li>
					<li>Minecraft Spigot plugins (Java)</li>
					<li>Creating games with LWJGL (Java)</li>
					<li>Writing shaders in GLSL</li>
					<li>Client/Server networking using TCP and UDP</li>
				</ul>
			</Frame>

			<Frame id="tools-skills-frame" title="Tools" maxWidth="1000px">
				<ul>
					<li>Visual Studio 2019/2022</li>
					<li>Jetbrains Rider</li>
					<li>Visual Studio Code</li>
					<li>Vim/Neovim</li>
					<li>Jetbrains Intellij Idea</li>
				</ul>
			</Frame>

			<Frame id="other-skills-frame" title="Other" maxWidth="1000px">
				<ul>
					<li>Shell/Bash scripting</li>
					<li>Linux</li>
				</ul>
			</Frame>
		</div>
	)
}
