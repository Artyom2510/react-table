import React, { FC } from 'react';
import cn from 'classnames';
import { HeaderGroup } from 'react-table';

import styles from './Thead.module.scss';

type TheadProps = {
	headerGroups: HeaderGroup<Record<string, unknown>>[];
};

const Thead: FC<TheadProps> = ({ headerGroups }) => {
	return (
		<thead>
			{headerGroups.map((headerGroup, i) => (
				<tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup${i}`}>
					{headerGroup.headers.map((column, th) => (
						<th
							{...column.getHeaderProps(column.getSortByToggleProps())}
							key={`column${th}`}
							className={cn(styles.th, {
								[styles.th_sorted]: column.isSorted,
								[styles.th_sorted_up]: column.isSortedDesc
							})}
						>
							{column.render('Header')}
						</th>
					))}
				</tr>
			))}
		</thead>
	);
};

export default Thead;
