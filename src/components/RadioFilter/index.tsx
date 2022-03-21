import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/dataSlice';
import cn from 'classnames';

import styles from './Radio.module.scss';
import { ReactComponent as RadioImgAll } from '../../assets/img/icons/all.svg';
import { ReactComponent as RadioImgEven } from '../../assets/img/icons/even.svg';
import { ReactComponent as RadioImgOdd } from '../../assets/img/icons/odd.svg';

type RadioProps = {
	type: string;
	name: string;
	desc: string;
	className: string;
};

const RadioFilter: FC<RadioProps> = ({ type, name, desc, className }) => {
	const dispatch = useDispatch();
	const handleChange = () => {
		dispatch(setFilter(type));
	};

	return (
		<label className={cn(className, styles.radio)}>
			<input
				onChange={handleChange}
				id={type}
				defaultChecked={type === 'all'}
				name='radio-filter'
				type='radio'
				className={styles.radio__input}
			/>
			<div className={styles.radio__wrap}>
				{type === 'all' && <RadioImgAll />}
				{type === 'even' && <RadioImgEven />}
				{type === 'odd' && <RadioImgOdd />}
				<div className={styles.radio__name}>
					<p>{name}</p>
					<p>{desc}</p>
				</div>
			</div>
		</label>
	);
};

export default RadioFilter;
