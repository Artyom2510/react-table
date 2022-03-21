import React, { FC } from 'react';
import cn from 'classnames';

import Logo from '../../assets/img/logo.png';
import Logo2x from '../../assets/img/logo@2x.png';
import Logo3x from '../../assets/img/logo@3x.png';
import HelpImg from '../../assets/img/icons/help-circle.svg';
import AvaImg from '../../assets/img/ava.png';
import styles from './DashboardHead.module.scss';

const DashboardHead: FC = () => {
	return (
		<div className={styles.dashboardHead}>
			<img
				className={styles.dashboardHead__logo}
				src={Logo}
				srcSet={`${Logo2x} 2x, ${Logo3x} 3x`}
				alt='Dashboard'
			/>
			<div className={cn(styles.dashboardHead__info, styles.info)}>
				<button className={styles.info__btn}>
					<span>Help</span>
					<img src={HelpImg} alt='?' />
				</button>
				<button className={cn(styles.info__btn, styles.info__btn_upgrade)}>
					<span>upgrade</span>
				</button>
				<img src={AvaImg} alt='' className={styles.info__ava} />
			</div>
		</div>
	);
};

export default DashboardHead;
