import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ReactNode } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "React Practice" },
		{ name: "description", content: "A container for practicing react, typescript, remix, jest, etc." },
	];
};

export function LinkToIndex() {
	return (
		<nav>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				<li>&lt; <Link to="/">Contents</Link></li>
			</ul>
		</nav>
	);
}

export function Links() {
	return (
		<nav>
			<ul style={{ listStyleType: 'none', padding: 0 }}>
				<li>&gt; <Link to="/weather">Weather</Link></li>
				<li>&gt; <Link to="/example">Example (jsx)</Link></li>
			</ul>
		</nav>
	);
}

export function Wrapper({ children }: { children: ReactNode }) {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			{children}
		</div>
	)
}

export default function Index() {
	return (
		<Wrapper>
			<h1>Contents</h1>
			<Links />
		</Wrapper>
	);
}
