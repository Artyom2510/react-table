import React, { FC, useMemo } from 'react';
import cn from 'classnames';

import RadioFilter from '../RadioFilter';
import Table from '../Table';

import styles from './DashboardTable.module.scss';

const DashboardTable: FC = () => {
	const radioType = useMemo(
		() => [
			{
				type: 'even',
				name: 'Even rows of data',
				desc: 'Display rows 2,4,6 etc'
			},
			{ type: 'odd', name: 'Odd rows of data', desc: 'Display rows 1,3,5 etc' },
			{ type: 'all', name: 'All data', desc: 'Display all data' }
		],
		[]
	);

	return (
		<section className={styles.reactTableSect}>
			<div className={cn(styles.reactTableSect__radioBlock, styles.radioBlock)}>
				{radioType.map(el => {
					return (
						<RadioFilter
							key={el.type}
							className={styles.radioBlock__radio}
							{...el}
						/>
					);
				})}
			</div>
			<Table />
		</section>
	);
};

export default DashboardTable;
