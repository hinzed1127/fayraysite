import React from 'react';
import './Murl.css';
import Joe from '../../img/surfing_joe.png';
import Erik from '../../img/opland_kitty.png';

export default function Murl() {
	return (
		<div className='murl'>
			<div className='joe'>
				<img src={Joe} alt='Surfing Joe'/>
			</div>
			<div className='erik'>
				<img src={Erik} alt='Erik kitty'/>
			</div>
		</div>
	);
}