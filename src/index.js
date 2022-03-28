import reactDom from "react-dom";
import { Heading1 } from "./Components/Header/PageHeader";

const maStyle = "text-2xl bg-slate-500 h-36";

const App = () => {
	return (
		// -- Components --
		// Header
		// Summary
		// Skills
		// Education
		<article>
			<Heading1> My Resume</Heading1>
			<h1>My Resume</h1>
			<aside>I SUCK AT WEB DEV</aside>
			<section>
				<p>Lorem Ipsum</p>
			</section>
		</article>
	)
};

reactDom.render(<App />, document.getElementById('root'));