import React, {
	useState,
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	ReactNode
} from 'react';

type CurrentScreen = {
	currentScreen: string;
	setCurrentScreen: Dispatch<SetStateAction<string>>;
};

const Context = createContext<CurrentScreen>({} as CurrentScreen);

export const TabsContext = ({ children }: { children: ReactNode }) => {
	const [currentScreen, setCurrentScreen] = useState('analyze');

	return (
		<Context.Provider value={{ currentScreen, setCurrentScreen }}>
			{children}
		</Context.Provider>
	);
};

export const useTabsContext = () => useContext(Context);
