import React, { FC } from 'react';
import { Row, HeaderGroup, TableProps, TablePropGetter } from 'react-table';

type TBodyProps = {
	rows: Row<Record<string, unknown>>[];
	headerGroups: HeaderGroup<Record<string, unknown>>[];
	getTableBodyProps: (
		propGetter?: TablePropGetter<Record<string, unknown>> | undefined
	) => TableProps;
	prepareRow: (row: Row<Record<string, unknown>>) => void;
};

const TBody: FC<TBodyProps> = ({
	rows,
	getTableBodyProps,
	headerGroups,
	prepareRow
}) => {
	return (
		<tbody {...getTableBodyProps()}>
			{!rows.length && (
				<tr>
					<td colSpan={headerGroups[0].headers.length}>no matches</td>
				</tr>
			)}
			{rows.map((row, i) => {
				prepareRow(row);
				return (
					<tr {...row.getRowProps()} key={`row${i}`}>
						{row.cells.map((cell, cells) => {
							return (
								<td {...cell.getCellProps()} key={`cell${cells}`}>
									{cell.render('Cell')}
								</td>
							);
						})}
					</tr>
				);
			})}
		</tbody>
	);
};

export default TBody;
