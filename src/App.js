import "./App.css";
import React from "react";
import { DeckComponent } from "./compopnents/deck";
import { Score } from "./compopnents/Score/Score";
// @ts-ignore
import {
	ContextCard,
	useCard,
} from "./compopnents/deck/useCard";

const PassPropsComp = ({ children }) => {
	const [state, dispatch] = useCard();
	const value = [state, dispatch];
	return React.Children.map(children, (child) =>
		React.cloneElement(child, { value })
	);
};

const App = () => {
	return (
		<ContextCard>
			<PassPropsComp>
				<DeckComponent />
				<Score />
			</PassPropsComp>
		</ContextCard>
	);
};

export default App;
