import React from 'react';

export default function Icon(props) {
	const styles = {
		svg: {
			display: 'inline-block',
			verticalAlign: 'middle'
		},
		path: {
			fill: '#000'
		}
	};
	const size = 40;

	return (
		<svg
			className='icon'
			style={styles.svg}
			width={`${size}px`}
			height={`${size}px`}
			viewBox='0 0 1024 1024'
		>

		{props.icon.map((path) => (
			<path
				style={styles.path}
				d={path}
			></path>
		))}

		</svg>
	);
}