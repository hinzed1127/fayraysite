import React from 'react';
import Rowbox from '../Rowbox/Rowbox';
import './NavBar.css';

export default function NavBar() {
	return (
		<div className='navbar'>
			<Rowbox
				text='Home'
				linkPath='/'
				number={'6'}
			/>
			<Rowbox
				text='Bio'
				linkPath='/bio'
				number={'1'}
			/>
			<Rowbox
				text='Music'
				linkPath='/music'
				number={'2'}
			/>
			<Rowbox
				text='Shows'
				linkPath='/shows'
				number={'3'}
			/>
			<Rowbox
				text='Media'
				linkPath='/media'
				number={'5'}
			/>
			<Rowbox
				text='Contact'
				linkPath='/contact'
				number={'4'}
			/>
		</div>
	)
}