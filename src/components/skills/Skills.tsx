import "./Skills.css";

export default function Skills() {
	return (
		<div id="skills-container" className="frame">
			<h2 className="title">My skills</h2>
			<ul id="skills-list">
				<li>
					Frontend:
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JS</li>
						<li>ReactJS</li>
					</ul>
				</li>
				<li>
					Backend:
					<ul>
						<li>NodeJS</li>
						<li>ExpressJS</li>
						<li>NestJS</li>
						<li>Prisma</li>
						<li>PassportJS</li>
						<li>JWT</li>
					</ul>
				</li>
				<li>
					Software Development:
					<ul>
						<li>C# (WinForms, WPF)</li>
						<li>C++ (Qt, GTK)</li>
						<li>C (GTK)</li>
					</ul>
				</li>
				<li>
					Game Development:
					<ul>
						<li>C# (Unity, Godot, OpenTK)</li>
						<li>C++ (UnrealEngine, OpenGL, DirectX, SFML, SDL2, Allegro)</li>
						<li>C (OpenGL, SDL2, Allegro)</li>
						<li>Java (Minecraft plugins, LWJGL)</li>
						<li>GLSL (OpenGL shaders)</li>
						<li>GDScript (Godot)</li>
						<li>Client/Server networking</li>
					</ul>
				</li>
				<li>
					Tools:
					<ul>
						<li>Visual Studio 2019/2022</li>
						<li>Rider</li>
						<li>Visual Studio Code</li>
						<li>Vim/Neovim</li>
						<li>Intellij Idea</li>
						<li>Eclipse</li>
					</ul>
				</li>
				<li>
					Other:
					<ul>
						<li>Shell/Bash scripting</li>
						<li>Linux command line</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}