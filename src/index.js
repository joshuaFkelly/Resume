import reactDom from "react-dom";
import { Heading1 } from "./Components/Headers/Headings";

const maStyle = "text-2xl bg-slate-500 h-36";

const App = () => {
	return (
		<article>
			<h1>My Resume</h1>
			<aside>I SUCK AT WEB DEV</aside>
			<section>
				<p>Lorem Ipsum</p>
			</section>
		</article>
	)
};

reactDom.render(<App />, document.getElementById('root'));