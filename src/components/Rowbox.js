// @flow
import React from 'react';
import './Rowbox.css';

export default function Rowbox(props) {
	return (
		<div className={`rowbox btn btn-${props.number}`}>
			{props.text}
		</div>
	);
}