import React from 'react';
import './Murl.css';
import Joe from '../../img/surfing_joe.png'

export default function Murl() {
	return (
		<div className='murl'>
			<div className='joe'>
				<img src={Joe} alt='Surfing Joe'/>
			</div>
		</div>
	);
}