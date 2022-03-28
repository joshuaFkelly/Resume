import reactDom from "react-dom";
import { Header } from "./Components/Headers/PageHeader";
import { Summary } from "./Components/Summary/Summary";
const maStyle = "text-2xl bg-slate-500 h-36";

const App = () => {
	return (
		<div>
			<Header></Header>
			<Summary></Summary>
		</div>
	)
};

reactDom.render(<App />, document.getElementById('root'));