import React, { FC } from 'react';
import { useTabsContext } from '../../context';

import styles from './RadioButton.module.scss';

type RadioButtonProps = {
	name: string;
};

const RadioButton: FC<RadioButtonProps> = ({ name }) => {
	const { setCurrentScreen } = useTabsContext();
	return (
		<div className={styles.radioBtn}>
			<input
				type='radio'
				id={name}
				name='tabs'
				defaultChecked={name === 'Analyze'}
				className={styles.radioBtn__input}
				onChange={() => setCurrentScreen(() => name.toLocaleLowerCase())}
			/>
			<label htmlFor={name} className={styles.radioBtn__label}>
				{name}
			</label>
		</div>
	);
};

export default RadioButton;
