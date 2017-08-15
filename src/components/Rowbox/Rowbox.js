// @flow
import React from 'react';
import './Rowbox.css';
import Link from '../../components/Link/Link';
import history from '../../history';

type TypeProps = {
	text: string,
	linkPath: string,
	number: number
};

export default function Rowbox(props: TypeProps) {
	let classes = `rowbox btn btn-${props.number}`;
	if (props.linkPath === window.location.pathname) {
		classes += ' selected';
	}

	return (
		<div
			className={classes}
			onClick={() => history.push(props.linkPath)}
		>
			<Link to={props.linkPath}>
				{props.text}
			</Link>
		</div>
	);
}