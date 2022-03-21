import React, { ChangeEvent } from 'react';
import { ColumnInstance } from 'react-table';

import styles from './Input.module.scss';

const DefaultColumnFilter = ({
	column: { filterValue, setFilter, id }
}: {
	column: ColumnInstance;
}) => {
	const isFirstcolumn = id === 'name';

	return (
		<input
			className={styles.input}
			onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
			id={`input${id}`}
			value={filterValue || ''}
			name='radio-filter'
			type={isFirstcolumn ? 'text' : 'number'}
			placeholder={isFirstcolumn ? 'Search...' : ''}
		/>
	);
};

export default DefaultColumnFilter;
