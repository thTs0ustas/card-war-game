import * as React from "react";
import { cardReducer } from "../../model/cardReducer";
import { createContext, useContext } from "react";

const CardContext = createContext(undefined);

export const ContextCard = ({
	reducer = cardReducer,
	children,
}) => {
	const [state, dispatch] = React.useReducer(
		reducer,
		{
			message: "Press to Start",
			history: { player1Hist: [], player2Hist: [] },
			winner: [],
		},
		(val) => val
	);
	let value = [state, dispatch];
	return (
		<CardContext.Provider value={value}>
			{children}
		</CardContext.Provider>
	);
};

export const useCard = () => {
	const context = useContext(CardContext);
	if (!context)
		throw new Error(
			"The component is out of the context provider"
		);

	return context;
};
