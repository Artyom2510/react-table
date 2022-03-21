import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
	useTable,
	useGlobalFilter,
	Column,
	useFilters,
	useSortBy
} from 'react-table';

import { selectFilteredData } from '../../redux/dataSlice';
import DefaultColumnFilter from '../DefaultColumnFilter';
import Thead from '../Thead';
import TBody from '../TBody';
import TFoot from '../TFoot';

import styles from './Table.module.scss';

const Table: FC = () => {
	const data = useSelector(selectFilteredData);

	const columns: Column[] = useMemo(
		() => [
			{
				Header: 'Data',
				accessor: 'name'
			},
			{
				Header: 'Summary1',
				accessor: 'summary1'
			},
			{
				Header: 'Summary2',
				accessor: 'summary2'
			},
			{
				Header: 'Summary3',
				accessor: 'summary3'
			},
			{
				Header: 'Summary4',
				accessor: 'summary4'
			},
			{
				Header: 'Summary5',
				accessor: 'summary5'
			}
		],
		[]
	);

	const defaultColumn = useMemo(
		() => ({
			Filter: DefaultColumnFilter
		}),
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		footerGroups,
		rows,
		prepareRow
	} = useTable(
		{ columns, defaultColumn, data },
		useFilters,
		useGlobalFilter,
		useSortBy
	);

	return (
		<table {...getTableProps()} className={styles.reactTable}>
			<Thead headerGroups={headerGroups} />
			<TBody
				rows={rows}
				prepareRow={prepareRow}
				getTableBodyProps={getTableBodyProps}
				headerGroups={headerGroups}
			/>
			<TFoot footerGroups={footerGroups} />
		</table>
	);
};

export default Table;
