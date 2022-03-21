import React, { FC } from 'react';
import { HeaderGroup } from 'react-table';

type TFootProps = {
	footerGroups: HeaderGroup<Record<string, unknown>>[];
};

const TFoot: FC<TFootProps> = ({ footerGroups }) => {
	return (
		<tfoot>
			{footerGroups.map((footerGroup, i) => (
				<tr {...footerGroup.getFooterGroupProps()} key={`footerGroup${i}`}>
					{footerGroup.headers.map((column, td) => (
						<td {...column.getFooterProps()} key={`tfoot${td}`}>
							{column.render('Filter')}
						</td>
					))}
				</tr>
			))}
		</tfoot>
	);
};

export default TFoot;
