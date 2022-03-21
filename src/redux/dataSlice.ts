import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

import { DataTransfersObject } from '../models/DataTransfersObject';
import fetchData from '../api';
import { handleHttpError } from '../helpers/handleHttpError';

type InitailData = {
	data: DataTransfersObject[];
	isLoading: boolean;
	isLoaded: boolean;
	error: string | null;
	globalFilter: string;
};

const initialState: InitailData = {
	data: [],
	isLoading: false,
	isLoaded: false,
	error: null,
	globalFilter: 'all'
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		getDataStart: state => {
			state.isLoading = true;
		},
		getDataSuccess: (
			state,
			{ payload }: PayloadAction<DataTransfersObject[]>
		) => {
			state.data = payload;
			state.isLoading = false;
			state.isLoaded = true;
		},
		getDataFailure: (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		},
		setFilter: (state, { payload }) => {
			state.globalFilter = payload;
		}
	}
});

const { getDataStart, getDataSuccess, getDataFailure } = dataSlice.actions;

export const { setFilter } = dataSlice.actions;

export const loadData = () => async (dispatch: Dispatch) => {
	dispatch(getDataStart());
	try {
		const res = await fetchData();
		dispatch(getDataSuccess(res.data));
	} catch (err) {
		dispatch(getDataFailure({ error: handleHttpError(err) }));
	}
};

export const selectData = (state: RootState) => state.data;

export const selectFilteredData = (state: RootState) => {
	const { data, globalFilter } = state.data;
	let filteredData;
	switch (globalFilter) {
		case 'even':
			filteredData = data.filter((el, idx) => idx % 2 !== 0);
			break;
		case 'odd':
			filteredData = data.filter((el, idx) => idx % 2 === 0);
			break;
		default:
			return data;
	}
	return filteredData;
};
export default dataSlice;
