import Frame from '../frame/Frame';
import './Skills.css';

export default function Skills() {
	return (
		<Frame id="skills-container" title="My skills" maxWidth="500px">
			<ul id="skills-list">
				<li>
					Frontend:
					<ul>
						<li>
							ReactJS frontend
							(TypeScript)
						</li>
						<li>
							HTML + CSS + JS/TS
							frontend
						</li>
					</ul>
				</li>
				<li>
					Backend:
					<ul>
						<li>
							ExpressJS REST API
							backend
						</li>
						<li>NestJS REST API</li>
						<li>
							NestJS Prisma
							integration
						</li>
						<li>
							PassportJS authorization
						</li>
						<li>JWT</li>
					</ul>
				</li>
				<li>
					Software Development:
					<ul>
						<li>
							WinForms desktop
							applications (C#)
						</li>
						<li>
							WPF desktop applications
							(C#)
						</li>
						<li>
							GTK desktop applications
							(C, C++)
						</li>
						<li>
							QT desktop applications
							(C++)
						</li>
					</ul>
				</li>
				<li>
					Game Development:
					<ul>
						<li>Unity Scripting (C#)</li>
						<li>Unity VR Scripting (C#)</li>
						<li>
							Unity Custom Editor
							Scripting (C#)
						</li>
						<li>
							Godot 2D/3D Scripting
							(C#, GDScript)
						</li>
						<li>
							UnrealEngine4 C++
							Scripting
						</li>
						<li>
							OpenGL programming (C,
							C++)
						</li>
						<li>
							WinAPI programming (C++)
						</li>
						<li>
							Creating games with SFML
							(C++)
						</li>
						<li>
							Creating games with SDL2
							(C, C++)
						</li>
						<li>
							Creating games with
							Allegro (C++)
						</li>
						<li>
							Minecraft Spigot plugins
							(Java)
						</li>
						<li>
							Creating games with
							LWJGL (Java)
						</li>
						<li>Writing shaders in GLSL</li>
						<li>
							Client/Server networking
							using TCP and UDP
						</li>
					</ul>
				</li>
				<li>
					Tools:
					<ul>
						<li>Visual Studio 2019/2022</li>
						<li>Jetbrains Rider</li>
						<li>Visual Studio Code</li>
						<li>Vim/Neovim</li>
						<li>Jetbrains Intellij Idea</li>
						<li>Eclipse IDE</li>
					</ul>
				</li>
				<li>
					Other:
					<ul>
						<li>Shell/Bash scripting</li>
						<li>Linux</li>
					</ul>
				</li>
			</ul>
		</Frame>
	);
}
