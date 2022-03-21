import React, { FC } from 'react';

import RadioButton from '../RadioButton';

import styles from './DashboardTabs.module.scss';
const tabs = ['Analyze', 'My campaigns', 'Configure'];

const DashboardTabs: FC = () => {
	return (
		<div className={styles.dashboardTabs}>
			{tabs.map(name => (
				<RadioButton key={name} name={name} />
			))}
		</div>
	);
};

export default DashboardTabs;
