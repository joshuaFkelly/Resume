import reactDom from "react-dom";
import { Header } from "./Components/Headers/PageHeader";
import { Summary } from "./Components/Summary/Summary";
import { Skills } from "./Components/Skills/Skill";
import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
// import toggled, { Switch } from "./Components/Switch/Switch";

// const toggleClass = "bg-tb text-white"

const App = () => {
	return (
		<div className="scroll-smooth snap-y bg-white mx-auto lg:max-w-3xl lg:shadow-2xl lg:my-10">
			{/* <Switch></Switch> */}
			<Header></Header>
			{/* <div className="border my-2"></div> */}
			<Summary></Summary>
			<Skills></Skills>
			<Education></Education>
			<Experience></Experience>
		</div>
	)
};

reactDom.render(<App />, document.getElementById('root'));