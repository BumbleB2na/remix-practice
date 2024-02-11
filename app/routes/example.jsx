import { LinkToIndex, Wrapper } from "./_index";

export const meta = () => {
	return [
		{ title: "Example" },
		{ name: "description", content: "Javascript page example" },
	];
};

export default function Index() {
	return (
		<Wrapper>
			<h1>Example (jsx)</h1>
			<p>Example page using jsx</p>
			<LinkToIndex />
		</Wrapper>
	);
}
