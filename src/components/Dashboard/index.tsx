import React, { FC } from 'react';

import DashboardHead from '../DashboardHead';
import DashboardTabs from '../DashboardTabs';
import DashboardTable from '../DashboardTable';
import { useTabsContext } from '../../context';

import styles from './Dashboard.module.scss';

const Dashboard: FC = () => {
	const { currentScreen } = useTabsContext();
	return (
		<div className={styles.dashboard}>
			<DashboardHead />
			<DashboardTabs />
			{currentScreen === 'analyze' && <DashboardTable />}
			{currentScreen === 'my campaigns' && (
				<p className={styles.dashboard__desc}>My campaigns</p>
			)}
			{currentScreen === 'configure' && (
				<p className={styles.dashboard__desc}>Configure</p>
			)}
		</div>
	);
};

export default Dashboard;
