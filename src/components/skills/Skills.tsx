import Frame from '../frame/Frame'
import './Skills.css'

export default function Skills() {
	return (
		<div id="skills-container">
			<Frame id="frontend-skills-frame" title="Frontend" maxWidth="1000px">
				<p>ReactJS frontend (TypeScript)</p>
				<p>HTML + CSS + JS/TS frontend</p>
			</Frame>

			<Frame id="backend-skills-frame" title="Backend" maxWidth="1000px">
				<p>ExpressJS REST API backend</p>
				<p>NestJS REST API</p>
				<p>NestJS Prisma integration</p>
				<p>PassportJS authorization</p>
				<p>JWT</p>
			</Frame>

			<Frame id="gui-skills-frame" title="GUI Apps" maxWidth="1000px">
				<p>WinForms desktop apppcations (C#)</p>
				<p>WPF desktop apppcations (C#)</p>
				<p>GTK desktop apppcations (C, C++)</p>
				<p>QT desktop apppcations (C++)</p>
			</Frame>

			<Frame id="gamedev-skills-frame" title="Game Dev" maxWidth="1000px">
				<p>Unity Scripting (C#)</p>
				<p>Unity VR Scripting (C#)</p>
				<p>Unity Custom Editor Scripting (C#)</p>
				<p>Godot 2D/3D Scripting (C#, GDScript)</p>
				<p>UnrealEngine4 C++ Scripting</p>
				<p>OpenGL programming (C, C++)</p>
				<p>WinAPI programming (C++)</p>
				<p>Creating games with SFML (C++)</p>
				<p>Creating games with SDL2 (C, C++)</p>
				<p>Creating games with Allegro (C++)</p>
				<p>Minecraft Spigot plugins (Java)</p>
				<p>Creating games with LWJGL (Java)</p>
				<p>Writing shaders in GLSL</p>
				<p>Cpent/Server networking using TCP and UDP</p>
			</Frame>

			<Frame id="tools-skills-frame" title="Tools" maxWidth="1000px">
				<p>Visual Studio 2019/2022</p>
				<p>Jetbrains Rider</p>
				<p>Visual Studio Code</p>
				<p>Vim/Neovim</p>
				<p>Jetbrains Intelpj Idea</p>
			</Frame>

			<Frame id="other-skills-frame" title="Other" maxWidth="1000px">
				<p>Shell/Bash scripting</p>
				<p>Linux</p>
			</Frame>
		</div>
	)
}
