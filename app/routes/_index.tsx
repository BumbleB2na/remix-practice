import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "Remix Practice" },
		{ name: "description", content: "A container for practicing react, typescript, remix, jest, etc" },
	];
};

export function LinkToIndex() {
	return (
		<nav>
			&lt; <Link to="/">Contents</Link>
		</nav>
	);
}

export function Links() {
	return (
		<nav>
			&gt; <Link to="/weather">Weather</Link>
		</nav>
	);
}

import { ReactNode } from "react";

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
