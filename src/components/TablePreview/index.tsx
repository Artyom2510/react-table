import React, { FC } from 'react';

import PrintImg from '../../assets/img/icons/print.svg';
import DownloadImg from '../../assets/img/icons/download.svg';
import styles from './TablePreview.module.scss';

const TablePreview: FC = () => {
	return (
		<div className={styles.tablePreview}>
			<h4 className={styles.tablePreview__title}>Dashboard</h4>
			<div className={styles.pseudo}>
				<p className={styles.pseudo__date}>Aug 21, 2021 · Sep 21 2021</p>
				<button className={styles.pseudo__btn}>
					<img src={PrintImg} alt='' />
				</button>
				<button className={styles.pseudo__btn}>
					<img src={DownloadImg} alt='' />
				</button>
			</div>
		</div>
	);
};

export default TablePreview;
