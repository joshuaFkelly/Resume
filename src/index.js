import reactDom from "react-dom";
import { Header } from "./Components/Headers/PageHeader";
import { Summary } from "./Components/Summary/Summary";
import { Skills } from "./Components/Skills/Skill";
import { Education } from "./Components/Education/Education";

const App = () => {
	return (
		<div className="container mx-auto">
			<Header></Header>
			<div className="border my-2"></div>
			<Summary></Summary>
			<Skills></Skills>
			<Education></Education>
		</div>
	)
};

reactDom.render(<App />, document.getElementById('root'));