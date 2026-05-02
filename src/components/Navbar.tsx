import { Show, UserButton } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";
import { LogInIcon, MoonStarIcon, SunMediumIcon } from "lucide-react";
import { useEffect, useState } from "react";

function getThemePreference() {
	if (typeof document === "undefined") {
		return "light";
	}

	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

const Navbar = () => {
	const [theme, setTheme] = useState(getThemePreference);

	useEffect(() => {
		setTheme(getThemePreference());
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";

		document.documentElement.classList.toggle("dark", nextTheme === "dark");
		document.documentElement.style.colorScheme = nextTheme;
		localStorage.setItem("theme", nextTheme);
		setTheme(nextTheme);
	};

	return (
		<nav className="navbar">
			<div className="brand">
				<div className="mark">
					<div className="glyph" />
				</div>
				<Link to="/">
					<span>Skilled</span>
				</Link>
			</div>
			<div className="actions">
				<button
					type="button"
					className="theme-toggle"
					onClick={toggleTheme}
					aria-label={
						theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
					}
					title={
						theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"
					}
				>
					{theme === "dark" ? (
						<SunMediumIcon size={16} />
					) : (
						<MoonStarIcon size={16} />
					)}
					<span>{theme === "dark" ? "Light" : "Dark"}</span>
				</button>

				<Show when="signed-in">
					<UserButton />
				</Show>

				<Show when="signed-out">
					<Link to="/sign-in/$" className="btn-primary">
						<LogInIcon size={16} />
						Sign in
					</Link>
				</Show>
			</div>
		</nav>
	);
};

export default Navbar;
