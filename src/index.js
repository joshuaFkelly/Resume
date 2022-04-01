import reactDom from "react-dom";
import { Header } from "./Components/Headers/Header";
import { Summary } from "./Components/Summary/Summary";
import { Skills } from "./Components/Skills/Skills";
import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
// import toggled, { Switch } from "./Components/Switch/Switch";

// const toggleClass = "bg-tb text-white"

const App = () => {
	return (
		<div className="scroll-smooth snap-y bg-white mx-auto lg:max-w-3xl lg:shadow-2xl lg:my-10">
			{/* <Switch></Switch> */}
			<Header></Header>
			<Summary></Summary>
			<Skills></Skills>
			<Experience></Experience>
			<Education></Education>
		</div>
	)
};

reactDom.render(<App />, document.getElementById('root'));