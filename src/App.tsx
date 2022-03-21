import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadData, selectData } from './redux/dataSlice';
import { TabsContext } from './context';
import Dashboard from './components/Dashboard';

const App: FC = () => {
	const dispatch = useDispatch();
	const dataSelector = useSelector(selectData);
	const { error, isLoading, isLoaded } = dataSelector;

	useEffect(() => {
		dispatch(loadData());
	}, []);

	return (
		<>
			{error && <p>Oh no, there was an error</p>}
			{isLoading && <p>Loading...</p>}
			{isLoaded && (
				<TabsContext>
					<Dashboard />
				</TabsContext>
			)}
		</>
	);
};

export default App;
