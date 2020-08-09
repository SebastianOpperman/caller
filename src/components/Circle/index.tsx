import React from 'react';
import _ from '../Timer/style.module.css';

interface Props {
	time: number,
	color: string,
	progress: number
}

export default (props: Props) => (
<svg viewBox="0 0 300 300">
	<circle r="100" cx="150" cy="150" strokeWidth="16"
		className={props.time === 30 ? _.strokeReset : ''}
		stroke={props.color}
		strokeDashoffset={props.progress} />
	</svg>
);