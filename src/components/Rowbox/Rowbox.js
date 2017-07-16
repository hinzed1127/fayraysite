// @flow
import React from 'react';
import './Rowbox.css';
import Link from '../../components/Link/Link';

type TypeProps = {
	text: string,
	linkPath: string,
	number: number
};

export default function Rowbox(props: TypeProps) {
	return (
		<div className={`rowbox btn btn-${props.number}`}>
			<Link to={props.linkPath}>
				{props.text}
			</Link>
		</div>
	);
}