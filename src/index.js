import reactDom from "react-dom";
import { Header } from "./Components/Headers/PageHeader";
import { Summary } from "./Components/Summary/Summary";
import { Skills } from "./Components/Skills/Skill";
import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
import { Switch } from "./Components/Switch/Switch";
const App = () => {
	return (
		<div className="container xl:w-3/5 2xl:w-1/2 mx-auto">
			<Switch></Switch>
			<Header></Header>
			<div className="border my-2"></div>
			<Summary></Summary>
			<Skills></Skills>
			<Education></Education>
			<Experience></Experience>
		</div>
	)
};

reactDom.render(<App />, document.getElementById('root'));